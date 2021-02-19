using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstuSozlukAPI.Models
{
    public class User
    {
        public User()
        {
            Entries = new List<Entry>();
            Answers = new List<Answer>();
        }

        public int Id { get; set; }
        public string UserName { get; set; }

        public string Email { get; set; }

        public string Faculty { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public List<Entry> Entries { get; set; }
        public List<Answer> Answers { get; set; }
    }
}
