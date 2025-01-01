import "../style.css"

function Add({ handleAddTask }) {
  return (
    <button onClick={handleAddTask} className="add">
      {" "}
      <i className="fas fa-add"></i>{" "}
    </button>
  );
}

export default Add;
