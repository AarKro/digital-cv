import { FC } from "react";
import Markdown from "react-markdown";
import './InlineImg.scss';

interface Props {
  img: string;
  caption: string;
  alt: string;
}

export const InlineImg: FC<Props> = ({ img, caption, alt }) => {
  return (
    <div className="inline-img">
      <div className="inline-img__wrapper">
        <img className="inline-img__img" src={img} alt={alt}/>
        <div className="inline-img__caption"><Markdown>{caption}</Markdown></div>
      </div>
    </div>
  );
}