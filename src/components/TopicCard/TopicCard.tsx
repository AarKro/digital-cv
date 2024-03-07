import { FC, useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { TopicModal } from '../TopicModal/TopicModal';
import './TopicCard.scss';

interface Props {

}

export const TopicCard: FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(!open);
  }

  return (
    <div className='topic-card--container'>
      <FadeIn delay={200}>
        <article className='topic-card' onClick={toggleModal}>
          <div className='topic-card__content'>
          </div>
        </article>
      </FadeIn>
      <TopicModal isOpen={open} toggleModal={toggleModal}/>
    </div>
  );
}