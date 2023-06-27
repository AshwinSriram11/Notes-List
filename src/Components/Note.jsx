const Note = (props) => {
  const Notes = props.notes;

  function HandleClick(id) {
    props.deleteNote(id);
  }

  return (
    <div>
      {Notes && Notes.map((note) => {
          return (
            <div key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => HandleClick(note.id)}>Delete Note</button>
            </div>
          );
        })}
    </div>
  );
};

export default Note;
