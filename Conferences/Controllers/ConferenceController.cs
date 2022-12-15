using Conferences.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using Conferences.Domain.Entities;

namespace Conferences.Web.Controllers;

[ApiController]
[Route("[controller]")]
public class ConferenceController : ControllerBase
{
    private readonly IConferenceRepository _conferenceRepository;

    public ConferenceController(IConferenceRepository conferenceRepository)
    {
        _conferenceRepository = conferenceRepository;
    }

    [HttpGet]
    public async Task<IEnumerable<Conference>> Get()
    {
        return await _conferenceRepository.GetAll();
    }

    [HttpGet("{id}")]
    public async Task<Conference?> GetById([FromQuery] int id)
    {
        return await _conferenceRepository.GetConferenceById(id);
    }

    [HttpPost]
    public async Task Add([FromBody] Conference conference)
    {
        await _conferenceRepository.AddConference(conference);
    }

    [HttpDelete("{id}")]
    public async Task DeleteById([FromQuery] int id)
    {
        await _conferenceRepository.DeleteConference(id);
    }
}