using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstuSozlukAPI.Models
{
    public class Answer
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int EntryId { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public Entry Entry { get; set; }

        public User User { get; set; }


    }
}
