import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const changeYearHangler = (year) => {
    console.log(year);
  };
  const ExpenseList = props.items.map((item) => (
    <Card key={item.title.toString()} className="expenses">
      {<ExpenseItem title={item.title} amount={item.amount} date={item.date} />}
    </Card>
  ));
  return (
    <div>
      <ExpensesFilter onChangeYear={changeYearHangler} />
      {ExpenseList}
    </div>
  );
}

export default Expenses;
