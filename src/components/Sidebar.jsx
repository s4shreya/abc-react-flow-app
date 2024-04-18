import styles from './Sidebar.module.css';

const Sidebar = props => {

  return (
    <div className={styles.container}>Sidebar
    <button onClick={() => props.addNewNodeHandler()}>Add</button>
    </div>
  )
}
export default Sidebar