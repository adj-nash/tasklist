import styles from "./todoitem.module.css";

export default function TodoItem({ task, todos, setTodos }) {
  function handleDelete(task) {
    setTodos(todos.filter((todo) => todo !== task));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const className = task.done ? styles.completed : "";
  return (
    <div className={styles.task}>
      <div className={styles.taskName}>
        <span className={className} onClick={() => handleClick(task.name)}>
          {task.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(task)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
    </div>
  );
}
