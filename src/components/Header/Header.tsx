import styles from "./styles.module.css";
const Header = ({ username , onLogout }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{`Welcome to Codeable Keep ${username}`}</p>
      <button onClick={onLogout}>Exit</button>
    </div>
  );
};

export default Header;
