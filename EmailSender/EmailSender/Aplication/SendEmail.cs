using Azure.Communication.Email;
using Azure;
using FluentValidation;
using MediatR;

namespace EmailSender.Aplicacion
{
    public class SendEmail
    {
        public class Execute : IRequest<Response>
        {
            public string Subject { get; set; }
            public string PlainText { get; set; }
            public string HtmlContent { get; set; }
            public List<string> Recipients { get; set; }
        }

        public class ExecuteValidation : AbstractValidator<Execute>
        {
            public ExecuteValidation()
            {
                RuleFor(x => x.Subject).NotEmpty().WithMessage("Este campo no puede estar vacio");
                RuleFor(x => x.PlainText).NotEqual("string").NotEqual("String");
                RuleFor(x => x.HtmlContent).NotEmpty().WithMessage("Este campo no puede estar vacio");
                RuleFor(x => x.Recipients).NotEmpty().WithMessage("Ingrese un correo");
            }
        }

        public class Response
        {
            public bool Success { get; set; }
            public string MessageId { get; set; }
            public string Error { get; set; }
        }

        public class Manejador : IRequestHandler<Execute, Response>
        {
            private readonly string _connectionString;
            private EmailClient _emailClient;

            public Manejador( EmailClient emailClient)
            {
                _emailClient = emailClient;
            }

            public async Task<Response> Handle(Execute request, CancellationToken cancellationToken)
            {
                try
                {

                    var emailMessage = new EmailMessage(
                        senderAddress: "DoNotReply@d1c51f6f-af96-40fc-91ad-f75b2d3a2a17.azurecomm.net",
                        content: new EmailContent(request.Subject)
                        {
                            PlainText = request.PlainText,
                            Html = request.HtmlContent
                        },
                        recipients: new EmailRecipients(
                            request.Recipients.ConvertAll(email => new EmailAddress(email))));

                    EmailSendOperation emailSendOperation = await _emailClient.SendAsync(WaitUntil.Completed, emailMessage);
                    return new Response
                    {
                        Success = true,
                        MessageId = emailSendOperation.Id
                    };

                }
                catch (Exception ex)
                {
                    return new Response
                    {
                        Success = false,
                        Error = ex.Message
                    };
                }
            }
        }
    }
}
