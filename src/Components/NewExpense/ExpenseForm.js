import styles from "./ExpenseForm.module.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      title.trim().length === 0 ||
      amount.trim().length === 0 ||
      date.trim().length === 0
    ) {
      setError({
        message: "Please enter valid input",
      });
      return;
    }

    const enteredExpense = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveEnteredExpense(enteredExpense);
    setTitle("");
    setAmount("");
    setDate("");
    errorHandler();
  };

  return (
    <div>
      {error && (
        <div className={styles["new-expsense__error"]}> {error.message}</div>
      )}
      <form onSubmit={submitHandler}>
        <div className={styles["new-expense__controls"]}>
          <div className={styles["new-expense__control"]}>
            <label>Title</label>
            <input
              value={title}
              onChange={titleChangeHandler}
              type="text"
            ></input>
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Amount</label>
            <input
              value={amount}
              onChange={dateChangeHandler}
              type="number"
              min="0.01"
              step="0.01"
            ></input>
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Date</label>
            <input
              value={date}
              onChange={amountChangeHandler}
              type="date"
              min="1900-01-01"
              max="2030-12-31"
            ></input>
          </div>
        </div>
        <div className={styles["new-expense__actions"]}>
          <button type="button">Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
