import { FC, useEffect, useState } from 'react';
import { isSafari } from '../../main';
import './Background.scss';

interface Props {
  animateStart: boolean;
}

export const Background: FC<Props> = ({ animateStart }) => {
  const [transitionFinished, setTransitionFinished] = useState<boolean>(false);
  const [animate, setAnimate] =  useState<boolean>(false);

  useEffect(() => {
    if (animateStart && isSafari) {
      setTransitionFinished(true);
    } else if (animateStart) {
      setAnimate(true);
    }
  }, [animateStart]);

  useEffect(() => {
    if (animate) {
      setTimeout(() => setTransitionFinished(true), 1000);
    }
  }, [animate]);

  return (
    <div>
      <div className={`background background__gradient ${animate ? 'transition__gradient' : ''}`}/>
      <div className={`background background__svg ${animate ? 'transition__svg' : ''} ${transitionFinished && !isSafari ? 'animate-svg' : transitionFinished && isSafari ? 'animate-svg--safari' : ''}`}/>
    </div>
  );
}