using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstuSozlukAPI.Models
{
    public class Entry
    {
        public Entry()
        {
            Answers = new List<Answer>();
        }
        public int Id { get; set; }

        public int UserId { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public List<Answer> Answers { get; set; }
        public User User { get; set; }
    }
}
