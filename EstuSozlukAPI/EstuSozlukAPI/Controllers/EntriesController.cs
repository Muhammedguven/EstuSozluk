using EstuSozlukAPI.Data;
using EstuSozlukAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstuSozlukAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Entries")]
    public class EntriesController : Controller
    {

        private IAppRepository _appRepository;

        public EntriesController(IAppRepository appRepository)
        {
            _appRepository = appRepository;
        }

        [HttpGet]
        public ActionResult GetEntries()
        {
            var entries = _appRepository.GetEntries();
            return Ok(entries);
        }

        [HttpGet]
        [Route("faculty")]
        public ActionResult GetEntriesByCategory(string category)
        {
            var entries = _appRepository.GetEntriesByCategory(category);
            return Ok(entries);
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]Entry entry)
        {
            entry.Date = DateTime.Now;
            _appRepository.Add(entry);
            _appRepository.SaveAll();
            return Ok(entry);
        }

        [HttpGet]
        [Route("detail")]
        public ActionResult GetEntriesById(int id)
        {
            var entry = _appRepository.GetEntryById(id);
            return Ok(entry);
        }

        [HttpGet]
        [Route("answers")]
        public ActionResult GetAnswersByEntry(int entryId)
        {
            var answers = _appRepository.GetAnswersByEntry(entryId);
            return Ok(answers);
        }
    }
}
