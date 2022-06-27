import styles from "./ExpensesFilter.module.css";

const ExpensesFilter = (props) => {
  const chagneYearHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  const yearsList = props.expenses.map((expenses) => {
    return expenses.date.getFullYear();
  });

  const uniqYears = [...new Set(yearsList)];

  const filterOptions = uniqYears.map((year) => {
    return (
      <option key={year.toString()} value={year}>
        {year}
      </option>
    );
  });

  return (
    <div className={styles["expenses-filter"]}>4
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={chagneYearHandler}>
          {filterOptions}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
