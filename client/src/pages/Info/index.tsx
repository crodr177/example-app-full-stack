interface InfoProps {
  title: String,
}
 
export const Info = (props: InfoProps): JSX.Element => {
  const { title } = props;

  return (
    <div className="page-container">
      <h1>{title}</h1>
    </div>
  );
}
 
export default Info;