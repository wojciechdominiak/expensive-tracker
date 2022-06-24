import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const setTrueFormVisible = () => {
    setFormIsVisible(true);
  };

  const setfalseFormVisible = () => {
    setFormIsVisible(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredExpense = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveEnteredExpense(enteredExpense);
    setTitle("");
    setAmount("");
    setDate("");
    setfalseFormVisible();
  };
  if (!formIsVisible) {
    return <button onClick={setTrueFormVisible}>Add New Expsense</button>;
  } else {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={title}
              onChange={titleChangeHandler}
              type="text"
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              value={amount}
              onChange={dateChangeHandler}
              type="number"
              min="0.01"
              step="0.01"
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={date}
              onChange={amountChangeHandler}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={setfalseFormVisible}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
