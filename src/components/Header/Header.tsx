import { FC } from 'react';
import './Header.scss';

interface Props {

}

export const Header: FC<Props> = () => {
  return (
    <nav className='header'>
      Aarons Portfolio
    </nav>
  );
}