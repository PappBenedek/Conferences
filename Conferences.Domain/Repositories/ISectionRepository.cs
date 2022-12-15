using Conferences.Domain.Entities;

namespace Conferences.Domain.Repositories;
public interface ISectionRepository
{
    public Task<IEnumerable<Section>> GetAllForEventByConferenceId(int conferenceId);

    public Task<Section?> GetSectionById(int id);

    public Task AddSection(Section section);

    public Task UpdateSection(Section Section);

    public Task DeleteSection(int id);
}
