import { FC } from "react";
import { TopicBox } from "../../components/TopicBox/TopicBox";
import "./TopicView.scss";

interface Props {

}

export const TopicView: FC<Props> = () => {
  return (
    <div className="grid">
      <TopicBox/>
      <TopicBox/>
      <TopicBox/>
      <TopicBox/>
      <TopicBox/>
    </div>
  );
}