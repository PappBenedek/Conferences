using Conferences.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Conferences.DataAccess;
public static class Extensions
{
    public static void MapConference(this EntityTypeBuilder<Conference> entityTypeBuilder)
    {
        entityTypeBuilder.HasKey(conference => conference.Id);
        entityTypeBuilder.Property(conference => conference.StartTime).IsRequired();
        entityTypeBuilder.OwnsMany(conference => conference.Sections)
            .WithOwner(section => section.Conference)
            .HasForeignKey(section => section.ConferenceId);
    }

    public static void MapSection(this EntityTypeBuilder<Section> entityTypeBuilder)
    {
        entityTypeBuilder.HasKey(section => section.Id);
        entityTypeBuilder.Property(section => section.Name).IsRequired();
        entityTypeBuilder.OwnsMany(section => section.Events)
            .WithOwner(ev => ev.Section)
            .HasForeignKey(ev => ev.SectionId);
    }

    public static void MapEvent(this EntityTypeBuilder<Event> entityTypeBuilder)
    {
        entityTypeBuilder.HasKey(ev => ev.Id);
        entityTypeBuilder.Property(ev => ev.Name).IsRequired();
        entityTypeBuilder.Property(ev => ev.Section).IsRequired();
    }
}
