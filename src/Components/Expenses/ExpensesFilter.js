import "./ExpensesFilter.css";
import { useState } from "react";

const ExpensesFilter = (props) => {
  const [year, setYear] = useState("2019");
  const chagneYearHandler = (event) => {
    setYear(event.target.value);
    props.onChangeYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={chagneYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
