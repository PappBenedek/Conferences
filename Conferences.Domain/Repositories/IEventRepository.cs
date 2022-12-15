using Conferences.Domain.Entities;

namespace Conferences.Domain.Repositories;
public interface IEventRepository
{
    public Task<IEnumerable<Event>> GetAll();

    public Task<Event?> GetEventById(int id);

    public Task<IEnumerable<Event>> GetEventBySectionId(int sectionId);

    public Task<Event?> GetEventByEventId(int eventId);

    public Task AddEvent(Event Event);

    public Task UpdateEvent(Event Event);

    public Task DeleteEvent(int id);
}
