import { FC } from "react";
import Markdown from "react-markdown";
import { YoutubeEmbed } from "../YoutubeEmbed/YoutubeEmbed";
import './TopicContent.scss';

const sections = [
  {
    title: 'What is League-Buddy?',
    content: 'League-Buddy is a Discord bot who can connect to your local League of Legends game and react to its gameplay events with 75 pre-recorded voice lines. Never play alone again!', 
  },
  {
    title: 'What does League-Buddy do?',
    content: 'Once League-Buddy has been started on your device, it automatically connects to any running game of League of Legends on the same machine. By typing `/join` League-Buddy will join the voice channel you are currently connected to. Now all you have to do is start to play! League-Buddy will react to all different kinds of in-game events, such as on game start, on champion kill, on multi kill, when jungle objectives are cleared, and more!', 
  },
  {
    title: 'Technical insights',
    content: 'League-Buddy is a node.js application written in TypeScript using the discordx TypeScript Discord API wrapper. It uses League of Legends local live-client-data API to access and poll for any game information required. If League-Buddy detects a registered game event, `champion kill` for instance, he will play a random voice line specified for this game event. All voice lines have been pre-recorded together with my friend Kevin :)', 
  },
  {
    title: 'Video Showcase',
  },
];

export const TopicContentLeagueBuddy: FC = () => {
  const [sectionOne, sectionTwo, sectionThree, sectionFour] = sections;

  return (
    <article className="topic-content">
      <section className="topic-content__left">
        <h3>{sectionOne.title}</h3>
        <p><Markdown>{sectionOne.content}</Markdown></p>
        <h3>{sectionTwo.title}</h3>
        <p><Markdown>{sectionTwo.content}</Markdown></p>
      </section>
      <section className="topic-content__right">
        <h3>{sectionThree.title}</h3>
        <p><Markdown>{sectionThree.content}</Markdown></p>
        <h3>{sectionFour.title}</h3>
        <YoutubeEmbed embedId="BFPWF1WCEnI" title="League Buddy Showcase"/>
      </section>
    </article>
  );
}