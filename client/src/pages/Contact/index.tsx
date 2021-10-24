interface ContactProps {
  title: String,
}
 
export const Contact = (props: ContactProps): JSX.Element => {
  const { title } = props;

  return (
    <div className="page-container">
      <h1>{title}</h1>
    </div>
  );
}
 
export default Contact;