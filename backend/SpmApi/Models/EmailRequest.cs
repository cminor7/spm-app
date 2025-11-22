namespace SpmApi.Models
{
    public class EmailRequest
    {
        public string from { get; set; } = string.Empty;
        public string to { get; set; } = string.Empty;

        // OPTIONAL
        public string? CC { get; set; }

        public string subject { get; set; } = string.Empty;
        public string body { get; set; } = string.Empty;

        // OPTIONAL
        public string? attachment { get; set; }
    }
}
