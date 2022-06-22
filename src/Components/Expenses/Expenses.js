import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const ExpenseList = props.items.map((item) => (
    <Card key={item.title.toString()} className="expenses">
      {<ExpenseItem title={item.title} amount={item.amount} date={item.date} />}
    </Card>
  ));
  return ExpenseList;
}

export default Expenses;
