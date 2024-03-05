import { FC } from 'react';
import { TopicCard } from '../../components/TopicCard/TopicCard';
import { Header } from '../../components/Header/Header';
import FadeIn from 'react-fade-in/lib/FadeIn';
import './TopicView.scss';

interface Props {
}

export const TopicView: FC<Props> = ({ }) => {
  return (
    <section className='topic-view'>
      <FadeIn>
        <Header/>
        </FadeIn>
        <div className='view'>
          <TopicCard/>
          <TopicCard/>
        </div>
      
    </section>
  )
}