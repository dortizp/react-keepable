import { useState } from "react";

const WelcomePage = ({username, onLogin}) => {
  const [formUsername, setFormUsername] = useState("")

  const handleChange = (e) => {
    setFormUsername(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onLogin(e, formUsername)
    }
  }

  return (
    <>
      <h1>Welcome to Codeable Keep</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={formUsername}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={(e)=>onLogin(e, formUsername)}>Enter</button>
    </>
  );
};
export default WelcomePage;
