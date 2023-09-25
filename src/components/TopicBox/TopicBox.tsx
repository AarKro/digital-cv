import { FC, useState } from "react";
import "./TopicBox.scss";

interface Props {

}

export const TopicBox: FC<Props> = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  
  const onToggle = () => {
    setToggled(!toggled);
  }

  return (
    <article className="container">
      <div onClick={onToggle} className={`title-box ${!toggled ? 'active' : ''}`}>
        Title
      </div>
      <div onClick={onToggle} className={`content-box ${toggled ? 'active' : ''}`}>
        Content
      </div>
    </article>
  );
}