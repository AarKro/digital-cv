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
        <TopicCard name='topic 1' modalContent={<div>content 1</div>}/>
        <TopicCard name='topic 2' modalContent={<div>content 2</div>}/>
      </div>
    </section>
  )
}