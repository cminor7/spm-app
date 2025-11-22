using Microsoft.Graph;
using Microsoft.Graph.Models;
using Azure.Identity;

namespace SpmApi.Services
{
    public class GraphEmailService
    {
        private readonly GraphServiceClient _graphClient;

        public GraphEmailService()
        {
            var tenantId = Environment.GetEnvironmentVariable("AZURE_TENANT_ID");
            var clientId = Environment.GetEnvironmentVariable("AZURE_CLIENT_ID");
            var clientSecret = Environment.GetEnvironmentVariable("AZURE_CLIENT_SECRET");

            var clientSecretCredential = new ClientSecretCredential(tenantId, clientId, clientSecret);
            _graphClient = new GraphServiceClient(clientSecretCredential);
        }

        public async Task SendEmailAsync(
            string from,
            string to,
            string CC,
            string subject,
            string message,
            string attachment)
        {
            // To recipients
            var toRecipients = new List<Recipient>();
            foreach (string recipient in to.Split(";", StringSplitOptions.RemoveEmptyEntries))
                toRecipients.Add(new Recipient { EmailAddress = new EmailAddress { Address = recipient.Trim() } });

            // CC recipients
            var ccRecipients = new List<Recipient>();
            if (!string.IsNullOrEmpty(CC))
                foreach (string recipient in CC.Split(";", StringSplitOptions.RemoveEmptyEntries))
                    ccRecipients.Add(new Recipient { EmailAddress = new EmailAddress { Address = recipient.Trim() } });

            // Attachments
            var attachments = new List<Attachment>();
            if (!string.IsNullOrEmpty(attachment))
                foreach (string filePath in attachment.Split(";", StringSplitOptions.RemoveEmptyEntries))
                    attachments.Add(new FileAttachment
                    {
                        OdataType = "#microsoft.graph.fileAttachment",
                        Name = Path.GetFileName(filePath.Trim()),
                        ContentBytes = File.ReadAllBytes(filePath.Trim())
                    });

            // Build the message
            var email = new Message
            {
                Subject = subject,
                Body = new ItemBody { ContentType = BodyType.Html, Content = message.Replace("\n", "<br>") },
                ToRecipients = toRecipients,
                CcRecipients = ccRecipients,
                Attachments = attachments
            };

            // Send the email
            await _graphClient.Users[from]
                .SendMail
                .PostAsync(new Microsoft.Graph.Users.Item.SendMail.SendMailPostRequestBody
                {
                    Message = email,
                    SaveToSentItems = true
                });
        }

        internal async Task SendEmailAsync(string to, string subject, string body)
        {
            throw new NotImplementedException();
        }
    }
}
