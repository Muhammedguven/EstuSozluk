using EstuSozlukAPI.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using EstuSozlukAPI.Dtos;
using EstuSozlukAPI.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace EstuSozlukAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Authentication")]
    public class AuthenticationController : Controller
    {
        private IAuthRepository _authRepositoy;
        private IConfiguration _configuration;

        public AuthenticationController(IAuthRepository authRepository, IConfiguration configuration)
        {
            _authRepositoy = authRepository;
            _configuration = configuration;
        }
        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] UserForRegisterDto userForRegisterDto)
        {
            if (await _authRepositoy.UserExist(userForRegisterDto.UserName, userForRegisterDto.Email))
            {
                ModelState.AddModelError("UserName", "Username already exist");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userToCreate = new User
            {
                UserName = userForRegisterDto.UserName,
                Email = userForRegisterDto.Email,
                Faculty = userForRegisterDto.Faculty,
            };
            var createdUser = await _authRepositoy.Register(userToCreate, userForRegisterDto.Password);
            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] UserForLoginDto userForLoginDto)
        {
            var user = await _authRepositoy.Login(userForLoginDto.UserName, userForLoginDto.Password);

            if (user == null)
            {
                return Unauthorized();
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration.GetSection("AppSettings:Token").Value);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.UserName)
                }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(tokenString);
        }
    }
}
