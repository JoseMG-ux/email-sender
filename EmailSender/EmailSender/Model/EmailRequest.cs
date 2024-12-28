namespace EmailSender.Model
{
    public class EmailRequest
    {
        public string Subject { get; set; }
        public string PlainText { get; set; }
        public string HtmlContent { get; set; }
        public List<string> Recipients { get; set; }
    }
}
