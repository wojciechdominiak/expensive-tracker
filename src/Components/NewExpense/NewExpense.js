import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onSaveEnteredExpenseHandler = (enteredExpense) => {
    const newExpense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };
  return (
    <div className={styles["new-expense"]}>
      <ExpenseForm onSaveEnteredExpense={onSaveEnteredExpenseHandler} />
    </div>
  );
}

export default NewExpense;
