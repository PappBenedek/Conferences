using Conferences.Domain.Entities;
using Conferences.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Conferences.DataAccess.Repositories;
public class EventRepository : IEventRepository
{
    private readonly Context _context;

    public EventRepository(Context context)
    {
        _context = context;
    }

    public async Task AddEvent(Event Event)
    {
        _context.Events.Add(Event);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteEvent(int id)
    {
        var ev = await _context.Events.FirstOrDefaultAsync(s => s.Id == id);
        if (ev != null)
        {
            _context.Events.Remove(ev);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<IEnumerable<Event>> GetAll()
    {
        return await _context.Events.ToArrayAsync();
    }

    public async Task<Event?> GetEventById(int id)
    {
        var ev = await _context.Events.FirstOrDefaultAsync(s => s.Id == id);
        if (ev != null)
        {
            return ev;
        }
        return null;
    }

    public async Task<IEnumerable<Event>> GetEventBySectionId(int sectionId)
    {
        return await _context.Events.Where(ev => ev.SectionId == sectionId).ToArrayAsync();
    }
    public async Task<Event?> GetEventByEventId(int eventId)
    {
        return await _context.Events.Where(ev => ev.Id == eventId).FirstOrDefaultAsync();
    }

    public async Task UpdateEvent(Event Event)
    {
        var currentEv = await _context.Events.Include(e => e.Section).FirstOrDefaultAsync(e => e.Id == Event.Id);
        if (currentEv == null) { throw new Exception(); }
        currentEv.Author = Event.Author;
        currentEv.Name = Event.Name;
        await _context.SaveChangesAsync();
    }


}
