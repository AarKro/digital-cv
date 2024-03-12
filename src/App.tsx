import { useEffect, useState } from 'react';
import { IntroView } from './sections/IntroView/IntroView'
import { TopicView } from './sections/TopicView/TopicView';
import './App.scss'
import { Background } from './components/Background/Background';

export const App = () => {
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const [hideIntro, setHideIntro] = useState<boolean>(false);

  useEffect(() => {
    if (introFinished) {
      setTimeout(() => setHideIntro(true), 700);
    }
  }, [introFinished]);

  return (
    <article className='app__wrapper'>
      <Background animateStart={introFinished}/>
      <div className='app'>
        {!hideIntro 
          ? <IntroView isIntroFinished={introFinished} setAnimationFinished={setIntroFinished}/>
          : <TopicView />
        }
      </div>
    </article>
  )
}