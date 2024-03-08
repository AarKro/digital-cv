import { FC, useEffect, useState } from 'react';
import './Background.scss';

interface Props {
  animate: boolean;
}

export const Background: FC<Props> = ({ animate }) => {
  const [transitionFinished, setTransitionFinished] = useState<boolean>(false);

  useEffect(() => {
    if (animate) {
      setTimeout(() => setTransitionFinished(true), 1000);
    }
  }, [animate]);

  return (
    <div>
      <div className={`background background__gradient ${animate ? 'transition__gradient' : ''}`}/>
      <div className={`background background__svg ${animate ? 'transition__svg' : ''} ${transitionFinished ? 'animate-svg' : ''}`}/>
    </div>
  );
}