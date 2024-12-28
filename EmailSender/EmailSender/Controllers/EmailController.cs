using System;
using Azure;
using EmailSender.Aplicacion;
using EmailSender.Model;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EmailSender.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly IMediator _mediator;

        public EmailController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<SendEmail.Response>> SendEmail([FromBody] SendEmail.Execute dataEmail)
        {
            var result = await _mediator.Send(dataEmail);

            if (result.Success)
            {
                return Ok(result);
            }

            return StatusCode(500, result);
        }
    }
}
