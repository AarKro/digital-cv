import { FC } from 'react';
import { TopicCard } from '../../components/TopicCard/TopicCard';
import { Header } from '../../components/Header/Header';
import FadeIn from 'react-fade-in/lib/FadeIn';
import DiscordBotIcon from '../../assets/discord_bot.svg';
import DiscordXLolIcon from '../../assets/discord_x_lol.svg';
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
        <TopicCard name='Hera' modalContent={<div>content 1</div>}>
          <div className='icon'>
            <DiscordBotIcon/>
          </div>
        </TopicCard>
        <TopicCard name='League-Buddy' modalContent={<div>content 2</div>}>
          <div className='icon'>
            <DiscordXLolIcon/>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}