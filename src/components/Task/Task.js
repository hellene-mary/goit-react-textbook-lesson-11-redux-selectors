import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/actions";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handlerDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handlerToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handlerToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handlerDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
