import { FC, PropsWithChildren, useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { TopicModal } from '../TopicModal/TopicModal';
import './TopicCard.scss';

interface Props {
  name: string;
  modalContent: React.ReactNode;
}

export const TopicCard: FC<PropsWithChildren<Props>> = ({ children, modalContent, name }) => {
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
            {children}
          </div>
        </article>
      </FadeIn>
      <TopicModal title={name} isOpen={open} toggleModal={toggleModal} content={modalContent}/>
    </div>
  );
}