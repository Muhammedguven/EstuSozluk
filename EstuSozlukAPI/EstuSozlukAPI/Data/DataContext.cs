using EstuSozlukAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstuSozlukAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Answer> Answers { get; set; }
        public DbSet<Entry> Entries { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
