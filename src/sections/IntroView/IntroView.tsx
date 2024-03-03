import { FC, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import './IntroView.scss';

const TYPE_WRITER_SPEED = 30;
const TYPE_WRITER_STYLE: React.CSSProperties = { display: 'inline-block', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, whiteSpace: 'pre-line'};

export const IntroView: FC = () => {
  const [animationFinished, setAnimationFinished] = useState<boolean>(false);
  return (
    <section className="intro-view">
      <div className="animation-wrapper">
        <div className="type-animation">
          <TypeAnimation
            sequence={[
              1000,
              'Hi.👋',
              1000,
              'Hi.👋 I\'m Aaron.',
              1000,
              'Hi.👋 I\'m Aaron.\nWelcome',
              200,
              'Hi.👋 I\'m Aaron.\nWelcome to my Portfolio!',
              1000,
              () => setAnimationFinished(true)
            ]}
            speed={TYPE_WRITER_SPEED}
            style={TYPE_WRITER_STYLE}
          />
        </div>
      </div>
    </section>
  )
}