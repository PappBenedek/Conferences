using Conferences.Domain.Entities;
using Conferences.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Conferences.DataAccess.Repositories;
public class SectionRepository : ISectionRepository
{
    private readonly Context _context;

    public SectionRepository(Context context)
    {
        _context = context;
    }

    public async Task AddSection(Section section)
    {
        var corerespondingConference = _context.Conferences.Include(c => c.Sections).FirstOrDefault(x => x.Id == section.ConferenceId);
        if (corerespondingConference == null) throw new Exception();
        corerespondingConference.Sections?.ToList().Add(section);
        _context.Sections.Add(section);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteSection(int id)
    {
        var section = await _context.Sections.FirstOrDefaultAsync(s => s.Id == id);
        if(section != null)
        {
            _context.Sections.Remove(section);
            await _context.SaveChangesAsync();
        }
        
    }

    public async Task<IEnumerable<Section>> GetAllForEventByConferenceId(int conferenceId)
        => await _context.Sections.Where(sec => sec.ConferenceId == conferenceId).ToArrayAsync();
   

    public async Task<Section?> GetSectionById(int id)
        => await _context.Sections.FirstOrDefaultAsync(s => s.Id == id);

    public async Task UpdateSection(Section Section)
    {
        var currentSection = await _context.Sections.FirstOrDefaultAsync(s => s.Id == Section.Id);
        if(currentSection != null)
        {
            currentSection = Section;
            await _context.SaveChangesAsync();
        }
    }
}
