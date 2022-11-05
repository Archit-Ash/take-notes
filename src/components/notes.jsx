import React from "react";

function Notes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete" onClick={handleClick}>DELETE</button>
    </div>
  );
}
export default Notes;