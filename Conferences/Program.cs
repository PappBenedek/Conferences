using Conferences.DataAccess;
using Conferences.DataAccess.Repositories;
using Conferences.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddControllersWithViews();
builder.Services.AddControllers();
builder.Services.AddDbContext<Context>(options => options.UseInMemoryDatabase("Conference"));

builder.Services.AddScoped(typeof(IConferenceRepository), typeof(ConferenceRepository));
builder.Services.AddScoped(typeof(ISectionRepository), typeof(SectionRepository));
builder.Services.AddScoped(typeof(IEventRepository), typeof(EventRepository));

var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseSwagger();
}


app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.MapFallbackToFile("index.html"); ;

app.Run();