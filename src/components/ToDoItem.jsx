import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setStatus] = useState(false);

  function clickHandler() {
    setStatus(!isDone);
  }

  return (
    <li
      style={{ textDecoration: isDone && "line-through" }}
      onClick={clickHandler}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
