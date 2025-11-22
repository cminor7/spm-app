using Microsoft.AspNetCore.Mvc;
using SpmApi.Services; // Reference to your GraphEmailService namespace
using System.Threading.Tasks;

namespace SpmApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly GraphEmailService _emailService;

        // Constructor injection
        public EmailController(GraphEmailService emailService)
        {
            _emailService = emailService;
        }

        // POST api/email/send
        [HttpPost("send")]
        public async Task<IActionResult> SendEmail([FromBody] EmailRequest request)
        {
            if (request == null)
                return BadRequest("Request body is null.");

            try
            {
                await _emailService.SendEmailAsync(
                    request.from,
                    request.to,
                    request.CC,
                    request.subject,
                    request.body,
                    request.attachment
                );

                return Ok("Email sent successfully.");
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, $"Error sending email: {ex.Message}");
            }
        }
    }

    // DTO for the request body
    public class EmailRequest
    {
        public string from { get; set; }
        public string to { get; set; }            // Semicolon-separated list
        public string CC { get; set; }            // Semicolon-separated list (uppercase)
        public string subject { get; set; }
        public string body { get; set; }
        public string attachment { get; set; }   // Semicolon-separated file paths
    }
}
