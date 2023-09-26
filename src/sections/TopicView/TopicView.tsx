import { FC } from "react";
import { TopicBox } from "../../components/TopicBox/TopicBox";
import "./TopicView.scss";

interface Props {

}

export const TopicView: FC<Props> = () => {
  return (
    <div className="topic-view">
      <TopicBox/>
      <TopicBox/>
      <TopicBox/>
      <TopicBox/>
      <TopicBox/>
    </div>
  );
}