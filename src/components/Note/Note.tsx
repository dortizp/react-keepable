import styles from "./styles.module.css";
import { deleteNote } from "../../services/notes";

const Note = ({ id, title, body, color, username, onFetchNotes }) => {
  const handleDelete = async () => {
    await deleteNote(username, id);
    await onFetchNotes()
  };
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <p className={styles.title}>{title}</p>
      <p className={styles.body}>{body}</p>
      <div className={styles.rowContainer}>
        <span>color</span>
        <span onClick={handleDelete}>trash</span>
      </div>
    </div>
  );
};

export default Note;
