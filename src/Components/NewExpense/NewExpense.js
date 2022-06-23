import "./NewExpense.css";
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
    <div className="new-expense">
      <ExpenseForm onSaveEnteredExpense={onSaveEnteredExpenseHandler} />
    </div>
  );
}

export default NewExpense;
