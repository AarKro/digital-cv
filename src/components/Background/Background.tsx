import { FC } from 'react';
import './Background.scss';

interface Props {
  animate: boolean;
}

export const Background: FC<Props> = ({ animate }) => {
  return (
    <div>
      <div className={`background background__gradient ${animate ? 'animate__gradient' : ''}`}/>
      <div className={`background background__svg ${animate ? 'animate__svg' : ''}`}/>
    </div>
  );
}