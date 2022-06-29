import styles from "./ExpenseForm.module.css";
import { useState, useRef } from "react";

function ExpenseForm(props) {
  const titleInput = useRef();
  const amountInput = useRef();
  const dateInput = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      titleInput.current.value.trim().length === 0 ||
      amountInput.current.value.trim().length === 0 ||
      dateInput.current.value.trim().length === 0
    ) {
      setError({
        message: "Please enter valid input",
      });
      return;
    }

    const enteredExpense = {
      title: titleInput.current.value,
      amount: +amountInput.current.value,
      date: new Date(dateInput.current.value),
    };
    props.onSaveEnteredExpense(enteredExpense);
    titleInput.current.value = "";
    amountInput.current.value = "";
    dateInput.current.value = "";
    errorHandler();
  };

  return (
    <>
      {error && (
        <div className={styles["new-expsense__error"]}> {error.message}</div>
      )}
      <form onSubmit={submitHandler}>
        <div className={styles["new-expense__controls"]}>
          <div className={styles["new-expense__control"]}>
            <label>Title</label>
            <input ref={titleInput} type="text"></input>
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Amount</label>
            <input
              ref={amountInput}
              type="number"
              min="0.01"
              step="0.01"
            ></input>
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Date</label>
            <input
              ref={dateInput}
              type="date"
              min="1900-01-01"
              max="2030-12-31"
            ></input>
          </div>
        </div>
        <div className={styles["new-expense__actions"]}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
