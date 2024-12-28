const NotesPage = ({ username, onLogout }) => {
  return (
    <>
      <h1>{`Welcome to Codeable Keep ${username}`}</h1>
      <h1>Notes</h1>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};
export default NotesPage;
