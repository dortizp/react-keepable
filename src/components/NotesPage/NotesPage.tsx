import Header from "../Header";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import NotesList from "../NotesList";
import { getNotes } from "../../services/notes";
import NoteForm from "../NoteForm/NoteForm";
import Sidebar from "../Sidebar";

const NotesPage = ({ username, onLogout }) => {
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
      <div className={styles.body}>
        <Sidebar/>
        <div className={styles.main}>
          <NoteForm onFetchNotes={fetchNotes} />
          {notes.length > 0 ? (
            <NotesList notes={notes} username={username} onFetchNotes={fetchNotes}/>
          ) : (
            "There are no notes yet"
          )}
        </div>
      </div>
    </div>
  );
};
export default NotesPage;
