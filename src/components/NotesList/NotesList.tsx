import Note from "../Note/Note";
import styles from "./styles.module.css"

const NotesList = ({ notes , username, onFetchNotes}) => {
  console.log('notes ',notes )
  const note = {
    title: "title",
    body: "body",
    color: "pink",
  };
  return (
    <div className={styles.container}>
      {notes.length > 0 &&
        notes.map((note) => (
          <Note key={note.id} id={note.id}
            title={note.title} body={note.body} color={note.color} username={username} onFetchNotes={onFetchNotes} />
        ))}
    </div>
  );
};

export default NotesList;
