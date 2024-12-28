import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import NotesPage from "./components/NotesPage";
function App() {
  const [username, setUsername] = useState("");
  const isLoggedIn = username !== "";

  const handleSubmit = (e, formUsername) => {
    e.preventDefault();
    const login = true; // TODO: temporary value. change to result of API call
    if (login) {
      setUsername(formUsername);
    }
  };


  const handleLogout = () => setUsername("")


  return (
    <>
      {isLoggedIn ? (
        <NotesPage onLogout={handleLogout}/>
      ) : (
        <WelcomePage username={username} onLogin={handleSubmit} />
      )}
    </>
  );
}

export default App;
