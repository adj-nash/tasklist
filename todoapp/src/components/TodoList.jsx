import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={!todos ? styles.list : null}>
      {todos.map((task) => (
        <TodoItem
          key={task.name}
          task={task}
          setTodos={setTodos}
          todos={todos}
        />
      ))}{" "}
    </div>
  );
}
