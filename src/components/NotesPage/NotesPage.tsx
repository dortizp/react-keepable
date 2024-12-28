import Header from "../Header";
import styles from "./styles.module.css"
import {useEffect, useState} from "react"
import NotesList from "../NotesList";
import { getNotes } from "../../services/notes";

const NotesPage = ({ username, onLogout }) => {
  const [notes, setNotes] = useState([])

  useEffect(()=>{
    fetchNotes()
  },[])

  const fetchNotes = async () => {
    const apiNotes = await getNotes()
    console.log('apiNotes ',apiNotes )
    setNotes(apiNotes)
  }


  return (
    <div className={styles.container}>
      <Header username={username} />
      <h1>Notes</h1>
      {
        notes.length > 0
        ? <NotesList />
        : "There are no notes yet"
      }
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
export default NotesPage;
