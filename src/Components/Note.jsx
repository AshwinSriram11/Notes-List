const Note = (props) => {
  const Notes = props.notes;

  function HandleClick(id) {
    props.deleteNote(id);
  }

  return (
    <div className="notes">
      {Notes &&
        Notes.map((note) => {
          return (
            <div key={note.id} className="note">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="del-btn">
                <button onClick={() => HandleClick(note.id)}>
                  Delete Note
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Note;
