using Conferences.Domain.Entities;
using Conferences.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using static System.Collections.Specialized.BitVector32;

namespace Conferences.Web.Controllers;

[ApiController]
[Route("[controller]")]
public class EventController : ControllerBase
{
    private readonly IEventRepository _eventRepository;

    public EventController(IEventRepository eventRepository)
    {
        _eventRepository = eventRepository;
    }

    [HttpGet("{sectionId}")]
    public async Task<IEnumerable<Event>> GetAll([FromQuery] int sectionId)
    {
        return await _eventRepository.GetEventBySectionId(sectionId);
    }

    [HttpPost]
    [Route("create")]
    public async Task Create([FromBody] Event ev) 
    {
        await _eventRepository.AddEvent(ev);
    }

    [HttpPost]
    [Route("update")]
    public async Task Update([FromBody] Event ev)
    {
        await _eventRepository.UpdateEvent(ev);
    }

    [HttpGet]
    public async Task<Event?> Get([FromQuery] int eventId)
    {
        return await _eventRepository.GetEventByEventId(eventId);
    }
}
