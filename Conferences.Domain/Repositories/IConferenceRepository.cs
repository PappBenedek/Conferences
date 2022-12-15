using Conferences.Domain.Entities;

namespace Conferences.Domain.Repositories;
public interface IConferenceRepository
{
    public Task<IEnumerable<Conference>> GetAll();

    public Task<Conference?> GetConferenceById(int id);

    public Task AddConference(Conference conference);

    public Task UpdateConference(Conference conference);

    public Task DeleteConference(int id);
}
