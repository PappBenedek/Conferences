using Conferences.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using Conferences.Domain.Entities;

namespace Conferences.Web.Controllers;

[ApiController]
[Route("[controller]")]
public class SectionController : ControllerBase
{
    private readonly ISectionRepository _sectionRepository;

    public SectionController(ISectionRepository sectionRepository)
    {
        _sectionRepository = sectionRepository;
    }

    [HttpGet]
    public Task<IEnumerable<Section>> Get()
    {
        //return await _sectionRepository.GetAllForEventByConferenceId(1);
        return Task.FromResult(Enumerable.Empty<Section>());
    }

    [HttpGet("{id}")]
    public async Task<IEnumerable<Section>> GetAll([FromQuery] int conferenceId)
    {
        var result = await _sectionRepository.GetAllForEventByConferenceId(conferenceId);
        return result;
    }


    [HttpPost]
    public async Task Create([FromBody] Section section)
    {
        await _sectionRepository.AddSection(section);
    }

    [HttpDelete("{id}")]
    public async Task Delete([FromQuery]int id) 
    {
        await _sectionRepository.DeleteSection(id);
    }
}
