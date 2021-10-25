import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLayoutEffect, useRef, useState } from 'react';

import { isElementAtPosition } from '../../../utils/helpers';

import '../styles.css';
import './styles.css';

interface LeftToRightTransitionComponentProps {
  description: String | null;
  desciptionUnderneath: String | null;
}
 
const LeftToRightTransitionComponent = (props: LeftToRightTransitionComponentProps) => {
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
    <div id="ltr-comp-container" className="row-direction row-start" ref={divRef}>
      <div className={`box-builder left-box ${!transition ? "" : "transition-right"}`}>{description}</div>
      <div className="desc-underneath">
        {
            desciptionUnderneath !== null ?
            (desciptionUnderneath) :
            (
              <div className="example-desc-underneath">
                <FontAwesomeIcon icon={faHandPointRight}/> 
                <p><strong>Another description from JSONPlaceholder.</strong></p> 
                <p>Take a look at this cool <a target="_blank" rel="noreferrer" href="https://jsonplaceholder.typicode.com/">API</a>.</p>
              </div>
            )
        }
      </div>
    </div> 
  );
}
 
export default LeftToRightTransitionComponent;