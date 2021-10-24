import { useLayoutEffect, useRef, useState } from 'react';

import { isElementAtPosition } from '../../../utils/helpers';

import '../styles.css';
import './styles.css';

interface RightToLeftTransitionComponentProps {
  description: String | null;
}
 
const RightToLeftTransitionComponent = (props: RightToLeftTransitionComponentProps) => {
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
    <div id="rtl-comp-container" className="row-direction" ref={divRef}>
      <div className={`box-builder right-box ${!transition ? "" : "transition-left"}`}>{description}</div>
    </div> 
  );
}
 
export default RightToLeftTransitionComponent;