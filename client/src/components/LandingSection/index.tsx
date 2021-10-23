import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.css';
 
const LandingSection = (): JSX.Element => {
  return ( 
    <div id="landing-section">
      <h1 id="landing-section-header">Example App</h1>
      <h3 className="landing-section-subheader">This application is an example of responsive css, reusable components and fun programming!</h3>
      <p className="landing-section-subheader by-name">By: Cruz Rodriguez <FontAwesomeIcon id="apple-icon" icon={faAppleAlt} /></p>
    </div> 
  );
}
 
export default LandingSection;