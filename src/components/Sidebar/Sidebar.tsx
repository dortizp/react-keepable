import { useState } from "react";
import styles from "./styles.module.css";

const Sidebar = () => {
  const [optionSelected, setOptionSelected] = useState("notes");
  const handleClick = (e) => {
    const element = e.target;
    const nameSelected = element.getAttribute("name");
    setOptionSelected(nameSelected);
  };
  console.log("optionSelected", optionSelected);
  return (
    <div className={styles.container}>
      <div className="sidebarOption" name="notes" onClick={handleClick}>
        Notes
      </div>{" "}
      {/* TODO: add icon */}
      <div className="sidebarOption" name="trash" onClick={handleClick}>
        Trash
      </div>{" "}
      {/* TODO: add icon */}
    </div>
  );
};

export default Sidebar;
