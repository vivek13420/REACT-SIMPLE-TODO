import React from "react";
import { TaskItem } from "./TaskItem";

function TaskList(props) {
  // console.log(props.tasks);
  return (
    <div>
      {props.tasks.map((item) => (
        <TaskItem title={item.title} status={item.status} key={item.title} />
      ))}
    </div>
  );
}

export { TaskList };
