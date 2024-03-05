import { FC } from 'react';
import './TopicCard.scss';

interface Props {

}

export const TopicCard: FC<Props> = () => {
  return (
    <div className='topic-card--container'>
      <article className='topic-card'>
        Topic
      </article>
    </div>
  );
}