using Conferences.Domain.Entities;
using Conferences.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Conferences.DataAccess.Repositories;
public class ConferenceRepository : IConferenceRepository
{
    private readonly Context _context;

    public ConferenceRepository(Context context)
    {
        _context = context;
    }

    public async Task AddConference(Conference conference)
    {
        _context.Conferences.Add(conference);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteConference(int id)
    {
        var conf = await _context.Conferences.FirstOrDefaultAsync(s => s.Id == id);
        if (conf != null)
        {
            _context.Conferences.Remove(conf);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<IEnumerable<Conference>> GetAll()
    {
        return await _context.Conferences.ToArrayAsync();
    }

    public async Task<Conference?> GetConferenceById(int id)
    {
        var conf = await _context.Conferences.Include(s => s.Sections).FirstOrDefaultAsync(s => s.Id == id);
        if (conf != null)
        {
            return conf;
        }
        return null;
    }

    public async Task UpdateConference(Conference conference)
    {
        var conf = await _context.Conferences.FirstOrDefaultAsync(s => s.Id == conference.Id);
        if (conf != null)
        {
            conf = conference;
            await _context.SaveChangesAsync();
        }
    }
}
