import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={styles.container}>
      Sidebar
      <button onClick={() => props.addNewNodeHandler("circle")}>
        Add circle
      </button>
      <button onClick={() => props.addNewNodeHandler("rectangle")}>
        Add rectangle
      </button>
    </div>
  );
};
export default Sidebar;
