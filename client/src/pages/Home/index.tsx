import { useEffect, useState } from 'react';
import LandingSection from '../../components/LandingSection';
import LeftToRightTransitionComponent from '../../components/TransitionComponents/LeftToRightTransitionComponent';
import RightToLeftTransitionComponent from '../../components/TransitionComponents/RightToLeftTransition';

import './styles.css';

type PostData = {
  userId: number;
  id: number;
  title: String;
  body: String;
}

export const Home = (): JSX.Element => {
  const [data, setData] = useState<Array<PostData> | null>(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) =>res.json())
      .then((data) => {
        setData(data)
      });
  }, []);

  return (
    <div className="page-container">
      <LandingSection/>
      <div id="description-section">
        <h3 className="subheader">This section uses css transitions with a bit of JavaScript for cool animations.</h3>
        <RightToLeftTransitionComponent description={data !== null ? data[0].body : ''} desciptionUnderneath={null}/>
        <LeftToRightTransitionComponent description={data !== null ? data[1].body : ''} desciptionUnderneath={null}/>
      </div>
    </div>
  );
}
 
export default Home;