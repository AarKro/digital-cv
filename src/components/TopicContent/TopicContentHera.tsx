import { FC } from "react";
import Markdown from "react-markdown";
import HeraVoteImg from '../../assets/hera_vote.png';
import HeraHelpImg from '../../assets/hera_help.png';
import HeraQueueImg from '../../assets/hera_queue.png';
import HeraNowPLayingImg from '../../assets/hera_nowplaying.png';
import { InlineImg } from "../InlineImg/InlineImg";
import './TopicContent.scss';

const sections = [
  {
    title: 'What is Hera?',
    content: 'Hera is a multi purpose chatbot, coming with an array of different features like a music player, server metrics tracking, general server moderation features and other fun commands!', 
  },
  {
    title: 'What does Hera do?',
    content: 'Hera is highly configurable and can be setup to administrate your server easily. Simply type a command which Hera recognises in a chat channel she has access too. For instance, the `$help` command will return a list of all commands available to you. Quickly create a poll to get your servers opinion on an important topic with `$vote`. Want to create groups for a round of your favorite game? The `$teams` command can do that! There is even a whole array of commands, like `$play`, `$join`, `$queue`, etc., which convert Hera into a music player for your server. Server admins have the possibility to disable commands using `$toggleCommand`, bulk delete messages using `$deleteMessages`, automatically assigning roles on server join with `$onJoinRole`, and more!', 
  },
  {
    title: 'Technical insights',
    content: 'The majority of Hera is written in Java, with a little bit of Kotlin here and there. To facilitate talking to the Discord API, Hera uses the Discord4J Discord API wrapper. Data is stored in a MySQL database for which there are multiple scripts available on Heras Github to set it up.', 
  },
  {
    title: 'List of all availabe commands',
  },
];

export const TopicContentHera: FC = () => {
  const [sectionOne, sectionTwo, sectionThree, sectionFour] = sections;

  return (
    <article className="topic-content">
      <section className="topic-content__left">
        <h3>{sectionOne.title}</h3>
        <p><Markdown>{sectionOne.content}</Markdown></p>
        <h3>{sectionTwo.title}</h3>
        <p><Markdown>{sectionTwo.content}</Markdown></p>
        <InlineImg img={HeraVoteImg} alt="hera vote" caption="*depiction of the `$vote` command*"/>
        <InlineImg img={HeraQueueImg} alt="hera queue" caption="*depiction of the `$queue` command after it has been filled with 48 songs*"/>
      </section>
      <section className="topic-content__right">
        <h3>{sectionThree.title}</h3>
        <p><Markdown>{sectionThree.content}</Markdown></p>
        <InlineImg img={HeraNowPLayingImg} alt="hera now playing" caption="*depiction of the `$nowPlaying` while Hera is playing music*"/>
        <h3>{sectionFour.title}</h3>
        <InlineImg img={HeraHelpImg} alt="hera help" caption="*`$help` showing all commands available to a server admin*"/>
      </section>
    </article>
  );
}