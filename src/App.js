import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    const userLoged = localStorage.getItem("isLoggedIn");

    if (userLoged === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((expenses) => [...expenses, expense]);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />

      {!isLoggedIn && <Login onLogin={loginHandler}></Login>}
      {isLoggedIn && <NewExpense onAddExpense={addExpenseHandler} />}
      {isLoggedIn && <Expenses items={expenses} />}
    </>
  );
}

export default App;
