using SpmApi.Services;
using DotNetEnv;  // <-- import DotNetEnv

// Load .env first thing
Env.Load();  

var builder = WebApplication.CreateBuilder(args);

// Now environment variables from .env are available
builder.Services.AddSingleton<GraphEmailService>();

builder.Services.AddControllers();

var app = builder.Build();

app.MapControllers();

app.Run();