
type EmailTemplateProps = {
  username:string;
}
const EmailTemplate = ({
  username
}:Readonly<EmailTemplateProps>) => {
  return (
    <div>
      <h1>Welcome {username}</h1>
    </div>
  )
}

export default EmailTemplate