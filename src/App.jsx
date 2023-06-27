import { useState } from "react";
import Navbar from "./Components/Navbar";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";

function App() {
  const [Notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    const newNotes = Notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  console.log(Notes);
  return (
    <div>
      <Navbar />
      <CreateNote addNote={addNote} />
      <Note notes={Notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
