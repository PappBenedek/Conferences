namespace Conferences.Domain.Entities;
public class Conference
{
    public int? Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public DateTime StartTime { get; set; }

    public DateTime EndTime { get; set; }

    public string Location { get; set; } = string.Empty;

    public string Theme { get; set; } = string.Empty;

    public int MaxNumberOfPeople { get; set; }

    public string Language { get; set; } = string.Empty;

    public List<Section>? Sections { get; set; } = new List<Section>();
}
