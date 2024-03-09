import { FC } from 'react';
import XIcon from '../../assets/x.svg';
import GithubIcon from '../../assets/github-mark.svg';
import './TopicModal.scss';

interface Props {
  isOpen: boolean;
  toggleModal: (event: React.MouseEvent) => void;
  content: React.ReactNode;
  title: string;
  github: string;
}

export const TopicModal: FC<Props> = ({ isOpen, toggleModal, content, title, github }) => {
  return (
    <dialog className={`topic-modal ${isOpen ? 'open' : ''}`}>
      <div className='topic-modal__content'>
        <div className='topic-modal__header'>
          <h2 className='topic-modal__header-title'>{title}</h2>
          <button className='topic-modal__header-close-button' onClick={toggleModal}>
            <XIcon/>
          </button>
        </div>
        <div className='topic-moda-__github--wrapper'>
          <a href={github} target='_blank' className='topic-modal__github'>
            <div className='topic-modal__github-link'>
              Check it out on Github
            </div>
            <GithubIcon/> 
          </a>
        </div>
        {content}
      </div>
    </dialog>
  )
}