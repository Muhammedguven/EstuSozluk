using EstuSozlukAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstuSozlukAPI.Data
{
    public class AppRepository : IAppRepository
    {
        private DataContext _context;

        public AppRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public Answer GetAnswer(int id)
        {
            var answer = _context.Answers.FirstOrDefault(a => a.Id == id);
            return answer;
        }

        public List<Answer> GetAnswersByEntry(int entryId)
        {
            var answers = _context.Answers.Where(p => p.EntryId == entryId).Include(c => c.User).ToList();
            answers.OrderBy(e => e.Date);
            
            return answers;
        }

        public List<Entry> GetEntries()
        {
            var entries = _context.Entries.Include(c => c.Answers).Include(c => c.User).ToList();
            entries.OrderBy(e => e.Date);
            entries.Reverse();
            return entries;
        }

        public List<Entry> GetEntriesByCategory(string category)
        {
            var entries = _context.Entries.Where(e => e.Category == category).Include(c => c.User).ToList();
            entries.OrderBy(e => e.Date);
            entries.Reverse();
            return entries;
        }

        public Entry GetEntryById(int entryId)
        {
            var entry = _context.Entries.Include(c => c.User).FirstOrDefault(e => e.Id == entryId);

            return entry;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
