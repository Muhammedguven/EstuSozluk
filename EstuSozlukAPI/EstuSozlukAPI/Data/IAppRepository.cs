using EstuSozlukAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstuSozlukAPI.Data
{
    public interface IAppRepository
    {
        void Add<T>(T entity) where T:class;
        void Delete<T>(T entity) where T : class;
        bool SaveAll();

        List<Entry> GetEntries();

        List<Entry> GetEntriesByCategory(string category);

        List<Answer> GetAnswersByEntry(int entryId);
        Entry GetEntryById(int entryId);
        Answer GetAnswer(int id);

    }
}
