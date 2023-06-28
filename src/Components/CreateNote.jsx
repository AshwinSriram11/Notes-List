import { useState } from "react";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function HandleClick(event) {
    const curNote = { id: Date.now(), ...note };
    props.addNote(curNote);
    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  function HandleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="createNote">
      <div className="createHeading">
        <h2>Oragnize your notes here</h2>
      </div>
      <div className="form">
        <form onSubmit={HandleClick}>
          <label>
            Title
            <input
              onChange={HandleChange}
              value={note.title}
              name="title"
              type="text"
            />
          </label>
          <label>
            Content
            <textarea
              onChange={HandleChange}
              name="content"
              value={note.content}
              id="title"
              type="text"
            />
          </label>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
