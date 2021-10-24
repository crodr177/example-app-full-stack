import { useLayoutEffect, useRef, useState } from 'react';

import { isElementAtPosition } from '../../../utils/helpers';

import '../styles.css';
import './styles.css';

interface LeftToRightTransitionComponentProps {
  description: String | null;
}
 
const LeftToRightTransitionComponent = (props: LeftToRightTransitionComponentProps) => {
  const { description } = props;
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
    <div id="ltr-comp-container" className="row-direction" ref={divRef}>
      <div className={`box-builder left-box ${!transition ? "" : "transition-right"}`}>{description}</div>
    </div> 
  );
}
 
export default LeftToRightTransitionComponent;