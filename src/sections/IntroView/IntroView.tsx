import { FC } from "react"
import { TypeAnimation } from "react-type-animation"
import './IntroView.scss';

const TYPE_WRITER_SPEED = 30;
const TYPE_WRITER_STYLE: React.CSSProperties = { display: 'inline-block', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, whiteSpace: 'pre-line'};

interface Props {
  isIntroFinished: boolean;
  setAnimationFinished: (value: boolean) => void;
}

export const IntroView: FC<Props> = ({ isIntroFinished, setAnimationFinished }) => {
  return (
    <section className={`intro-view ${isIntroFinished ? 'intro-finished' : ''}`}>
      <div className="animation-wrapper">
        <div className="type-animation">
          <TypeAnimation
            sequence={[
              800,
              'Hi.👋',
              800,
              'Hi.👋 I\'m Aaron.',
              800,
              'Hi.👋 I\'m Aaron.\nWelcome',
              200,
              'Hi.👋 I\'m Aaron.\nWelcome to my Portfolio!',
              600,
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