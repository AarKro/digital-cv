import { FC } from 'react';
import './TopicCard.scss';
import FadeIn from 'react-fade-in/lib/FadeIn';

interface Props {

}

export const TopicCard: FC<Props> = () => {
  return (
    <div className='topic-card--container'>
      <FadeIn delay={200}>
        <article className='topic-card'>
          Topic
        </article>
      </FadeIn>
    </div>
  );
}