import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import NotesPage from "./components/NotesPage";
function App() {
  const [username, setUsername] = useState(
    window.localStorage.getItem("username") || ""
  );
  const isLoggedIn = username !== "";

  const handleSubmit = (e, formUsername) => {
    e.preventDefault();
    const login = true; // TODO: temporary value. change to result of API call
    if (login) {
      window.localStorage.setItem("username", formUsername);
      setUsername(formUsername);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("username");
    setUsername("");
  };

  return (
    <>
      {isLoggedIn ? (
        <NotesPage username={username} onLogout={handleLogout} />
      ) : (
        <WelcomePage username={username} onLogin={handleSubmit} />
      )}
    </>
  );
}

export default App;
