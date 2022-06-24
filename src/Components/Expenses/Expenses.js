import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredList = props.items.filter(function (item) {
    return item.date.getFullYear().toString() === filteredYear;
  });

  const ExpenseList = filteredList.map((item) => (
    <ExpenseItem
      key={item.title.toString()}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={filterChangeHandler}
        />
        {ExpenseList}
      </div>
    </Card>
  );
}

export default Expenses;
