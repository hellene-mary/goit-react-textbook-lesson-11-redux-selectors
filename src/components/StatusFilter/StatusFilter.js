import { useSelector, useDispatch } from "react-redux";
import { Button } from "components/Button/Button";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/actions";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Отримуємо значення, яке зараз зберіжається в сторі
  const filter = useSelector(getStatusFilter);
  // Відправити екшен зміни фільтра, передавши йому нове значення
  const handlerStatusFilter = statusFilter => {
    dispatch(setStatusFilter(statusFilter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => {
          handlerStatusFilter(statusFilters.all);
        }}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => {
          handlerStatusFilter(statusFilters.active);
        }}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => {
          handlerStatusFilter(statusFilters.completed);
        }}
      >
        Completed
      </Button>
    </div>
  );
};
