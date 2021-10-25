import { useLayoutEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

import { isElementAtPosition } from '../../../utils/helpers';

import '../styles.css';
import './styles.css';

interface RightToLeftTransitionComponentProps {
  description: String | null;
  desciptionUnderneath: String | null;
}
 
const RightToLeftTransitionComponent = (props: RightToLeftTransitionComponentProps) => {
  const { description, desciptionUnderneath } = props;
  const divRef = useRef<HTMLDivElement | null>(null);
  const [transition, setTransition] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (divRef.current) {
      window.addEventListener('scroll', () => {
        if (isElementAtPosition(300, divRef)) {
          setTransition(true);
          window.removeEventListener('scroll', () => {isElementAtPosition(300, divRef)});
        }
      });

      return () => {
        window.removeEventListener('scroll', () => {isElementAtPosition(300, divRef)});
      };
    }
  }, [transition]);

  return ( 
    <div id="rtl-comp-container" className="row-direction row-end" ref={divRef}>
      <div className={`box-builder right-box ${!transition ? "" : "transition-left"}`}>
        <p className="transition-comp-title-desc">{description}</p>
      </div>
      <div className="desc-underneath">
        {
          desciptionUnderneath !== null ?
          (desciptionUnderneath) :
          (
            <div className="example-desc-underneath">
              <FontAwesomeIcon icon={faHandPointLeft}/> 
              <p><strong>Description from JSONPlaceholder.</strong></p> 
              <p>Take a look at this cool <a target="_blank" rel="noreferrer" href="https://jsonplaceholder.typicode.com/">API</a>.</p>
            </div>
          )
        }
      </div>
    </div> 
  );
}
 
export default RightToLeftTransitionComponent;