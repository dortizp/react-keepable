import styles from "./styles.module.css";
import { useState } from "react";
import { createNote } from "../../services/notes";

const NoteForm = () => {
  const initialFormData = {
    title: "",
    body: "",
    color: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    console.log('form field to change',e.target.name)
    setFormData((prev) => ({...prev, [e.target.name] : e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('formData',formData)
    const data = await createNote('david', formData)
    console.log('data ',data )

  }

  return (
    <form>
      <div className={styles.container}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={styles.title}
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="body"
          placeholder="Your note..."
          className={styles.body}
          value={formData.body}
          onChange={handleChange}
        ></textarea>
        <div className={styles.rowContainer}>
          <span>color</span>
          <button onClick={handleSubmit}>Keep it!</button>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
