import React from "react";
// import { TaskItem } from "./TaskItem";
import { TaskList } from "./TaskList";

function Task() {
  const [query, setQuery] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); //this will help in maintaining the state of yhe input element
  };
  const handleAdd = () => {
    const payload = {
      title: query,
      status: false
    };
    let newTasks = [...tasks, payload];
    // let newTasks = tasks.concat(payload)

    setTasks(newTasks);
  };

  // console.log(tasks);
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        <input
          value={query}
          onChange={handleChange}
          placeholder="add something"
          type="text"
        />
        <button onClick={handleAdd}>ADD</button>
      </div>
      <div>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export { Task };
