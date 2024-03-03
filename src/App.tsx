import { useEffect, useState } from 'react';
import { IntroView } from './sections/IntroView/IntroView'
import './App.scss'

const scrollToBottom = () => {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

const scrollToTop = () => {
  const el = document.getElementById('top');
  el?.scrollIntoView({behavior: 'smooth'});
}

export const App = () => {
  const [introFinished, setIntroFinished] = useState<boolean>(false);

  useEffect(() => {
    scrollToTop();
  })

  useEffect(() => {
    if (introFinished) {
      scrollToBottom();
    }
  }, [introFinished]);

  return (
    <div className="app">
      <span id="top"/>
      <IntroView setAnimationFinished={setIntroFinished}/>
    </div>
  )
}