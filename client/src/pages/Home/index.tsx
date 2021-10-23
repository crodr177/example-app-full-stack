import LandingSection from '../../components/LandingSection';
import LeftToRightTransitionComponent from '../../components/TransitionComponents/LeftToRightTransitionComponent';
import RightToLeftTransitionComponent from '../../components/TransitionComponents/RightToLeftTransition';

import './styles.css';

export const Home = (): JSX.Element => {
  return (
    <div className="page-container">
      <LandingSection/>
      <div id="description-section">
        <h3 className="subheader">This section uses css transitions with a bit of JavaScript for cool animations.</h3>
        <RightToLeftTransitionComponent/>
        <LeftToRightTransitionComponent/>
      </div>
    </div>
  );
}
 
export default Home;