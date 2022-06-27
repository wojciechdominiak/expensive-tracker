import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import styles from "./Expenses.module.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredList = props.items.filter(function (item) {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={styles.expenses}>
      <div>
        <ExpensesFilter
          expenses={props.items}
          selected={filteredYear}
          onChangeYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredList} />

        <ExpensesList filteredList={filteredList} />
      </div>
    </Card>
  );
}

export default Expenses;
