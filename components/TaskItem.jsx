import React from "react";

function TaskItem(props) {
  console.log(props);
  return <div>{`${props.title} || ${props.status}`}</div>;
}
export { TaskItem };
