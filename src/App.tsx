import { useEffect, useState } from 'react';
import { IntroView } from './sections/IntroView/IntroView'
import { TopicView } from './sections/TopicView/TopicView';
import './App.scss'

export const App = () => {
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const [hideIntro, setHideIntro] = useState<boolean>(false);

  useEffect(() => {
    if (introFinished) {
      setTimeout(() => setHideIntro(true), 700);
    }
  }, [introFinished]);

  return (
    <div className='app'>
      {!hideIntro 
        ? <IntroView isIntroFinished={introFinished} setAnimationFinished={setIntroFinished}/>
        : <TopicView />
      }
    </div>
  )
}