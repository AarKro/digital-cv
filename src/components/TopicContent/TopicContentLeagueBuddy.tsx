import { FC } from "react";
import Markdown from "react-markdown";
import './TopicContent.scss';

const sections = [
  {
    title: 'What is League-Buddy?',
    content: '', 
  },
  {
    title: 'What does League-Buddy do?',
    content: '', 
  },
  {
    title: 'Technical insights',
    content: '', 
  },
];

export const TopicContentLeagueBuddy: FC = () => {
  const [sectionOne, sectionTwo, sectionThree] = sections;

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
      </section>
    </article>
  );
}