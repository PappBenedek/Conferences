using Microsoft.EntityFrameworkCore;

namespace Conferences.Domain.Entities;
public class Section
{
    public int? Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public Conference? Conference { get; set; }

    public int ConferenceId { get; set; }

    public List<Event>? Events { get; set; } = new List<Event>();
}
