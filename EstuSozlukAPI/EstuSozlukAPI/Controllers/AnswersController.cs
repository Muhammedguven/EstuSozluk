using EstuSozlukAPI.Data;
using EstuSozlukAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace EstuSozlukAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Answers")]
    public class AnswersController : Controller
    {

        private IAppRepository _appRepository;

        public AnswersController(IAppRepository appRepository)
        {
            _appRepository = appRepository;
        }


        [HttpGet]
        [Route("detail")]
        public ActionResult GetAnswers(int id)
        {
            var answer = _appRepository.GetAnswer(id);
            return Ok(answer);
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add(int entryId, [FromBody] Answer answer)
        {
            var entry = _appRepository.GetEntryById(entryId);

            if (entry == null)
            {
                return BadRequest("Could not find the entry");
            }

           // var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            _appRepository.Add(answer);
            _appRepository.SaveAll();
            return Ok(answer);
        }
    }
}
