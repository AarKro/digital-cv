import { FC } from 'react';
import XIcon from '../../assets/x.svg';
import './TopicModal.scss';

interface Props {
  isOpen: boolean;
  toggleModal: (event: React.MouseEvent) => void;
}

export const TopicModal: FC<Props> = ({ isOpen, toggleModal }) => {
  return (
    <dialog className={`topic-modal ${isOpen ? 'open' : ''}`}>
      <div className='topic-modal__content'>
        <div className='topic-modal__header'>
          <h2 className='topic-modal__header-title'>title</h2>
          <button className='topic-modal__header-close-button' onClick={toggleModal}>
            <XIcon/>
          </button>
        </div>
      </div>
    </dialog>
  )
}