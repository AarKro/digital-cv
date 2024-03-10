import { FC } from "react";
import './YoutubeEmbed.scss';

interface Props {
  embedId: string;
  title: string;
}

export const YoutubeEmbed: FC<Props> = ({ embedId, title }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);