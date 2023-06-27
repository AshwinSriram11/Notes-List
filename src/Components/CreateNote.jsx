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
      <h2>Oragnize your notes here</h2>
      <form onSubmit={HandleClick}>
        <label>
          Note Title :
          <input
            onChange={HandleChange}
            value={note.title}
            name="title"
            type="text"
          />
        </label>
        <label>
          Note content :
          <input
            onChange={HandleChange}
            name="content"
            value={note.content}
            id="title"
            type="text"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateNote;
