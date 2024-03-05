import { FC } from 'react';
import { TopicCard } from '../../components/TopicCard/TopicCard';
import FadeIn from 'react-fade-in/lib/FadeIn';
import './TopicView.scss';

interface Props {
}

export const TopicView: FC<Props> = ({ }) => {
  return (
    <section className='topic-view'>
      <TopicCard/>
      <TopicCard/>
    </section>
  )
}