import styles from "./styles.module.css";

const Note = ({ title, body, color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <p className={styles.title}>{title}</p>
      <p className={styles.body}>{body}</p>
      <div className={styles.rowContainer}>
        <span>color</span>
        <span>trash</span>
      </div>
    </div>
  );
};

export default Note;
