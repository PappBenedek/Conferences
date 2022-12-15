using Microsoft.EntityFrameworkCore;

namespace Conferences.Domain.Entities;
[Owned]
public class Event
{
    public int? Id { get; set; }

    public string? Name { get; set; } = string.Empty;

    public string Author { get; set; } = string.Empty;

    public Section? Section { get; set; }

    public int? SectionId { get; set; }
}
