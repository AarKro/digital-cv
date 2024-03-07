import { FC } from 'react';
import './TopicModal.scss';

interface Props {
  isOpen: boolean;
  toggleModal: (event: React.MouseEvent) => void;
}

export const TopicModal: FC<Props> = ({ isOpen, toggleModal }) => {
  return (
    <dialog className={`topic-modal ${isOpen ? 'open' : ''}`} onClick={toggleModal}>
      
    </dialog>
  )
}