import Note from "../Note/Note";
import styles from "./styles.module.css"

const NotesList = ({ notes }) => {
  const note = {
    title: "title",
    body: "body",
    color: "pink",
  };
  return (
    <div className={styles.container}>
      {notes.length > 0 &&
        notes.map((note) => (
          <Note key={note.id} title={note.title} body={note.body} color={note.color} />
        ))}
    </div>
  );
};

export default NotesList;
