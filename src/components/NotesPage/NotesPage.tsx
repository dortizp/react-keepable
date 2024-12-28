import Header from "../Header";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import NotesList from "../NotesList";
import { getNotes } from "../../services/notes";

const NotesPage = ({ username , onLogout}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const apiNotes = await getNotes(username);
    console.log("apiNotes ", apiNotes.notes);
    setNotes(apiNotes.notes);
  };

  return (
    <div className={styles.container}>
      <Header username={username} onLogout={onLogout} />
      {notes.length > 0 ? (
        <NotesList notes={notes} />
      ) : (
        "There are no notes yet"
      )}
    </div>
  );
};
export default NotesPage;
