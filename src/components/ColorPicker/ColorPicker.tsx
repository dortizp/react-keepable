import styles from "./styles.module.css";
const ColorPicker = ({ onPickColor }) => {
  const COLORS = [
    "white",
    "red",
    "orange",
    "yellow",
    "cyan",
    "lightblue",
    "purple",
    "pink",
  ];
  return (
    <>
      <div className={styles.container}>
        {COLORS.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            onClick={onPickColor}
            className={styles.colorButton}
            name={color}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ColorPicker;
