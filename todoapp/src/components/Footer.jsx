import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Number of Tasks: {totalTodos}</span>
      <span className={styles.item}>Tasks Completed: {completedTodos}</span>
    </div>
  );
}
