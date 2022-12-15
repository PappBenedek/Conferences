using Microsoft.EntityFrameworkCore;
using Conferences.Domain.Entities;

namespace Conferences.DataAccess;

public class Context : DbContext
{
    public DbSet<Conference> Conferences { get; set; }

    public DbSet<Section> Sections { get; set; }

    public DbSet<Event> Events { get; set; }

    public Context(DbContextOptions<Context> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        //modelBuilder.Entity<Conference>().MapConference();
        //modelBuilder.Entity<Section>().MapSection();
        //modelBuilder.Entity<Event>().MapEvent();
    }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //    base.OnConfiguring(optionsBuilder);
    //    optionsBuilder.UseInMemoryDatabase("Conference");
    //}
}
