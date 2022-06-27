import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredList.length > 0) {
    return (
      <ul className={styles["expenses-list"]}>
        {props.filteredList.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </ul>
    );
  } else {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
};

export default ExpensesList;
