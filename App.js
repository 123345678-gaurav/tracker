import React from "react";
import Expenseitem from "./components/Expenseitem";
import NewexpenseItem from "./components/NewexpenseItem";


const App = ()=>
{
  const ExpenseitemList = [
    {
      id: 1,
      date: "28 March 2021",
      title: "Toilet Paper",
      amount: "237.12"
    },
    {
      id: 1,
      date: "28 April 2021",
      title: "House Rent",
      amount: "127.12"
    },
    {
      id: 1,
      date: "28 May 2021",
      title: "Car Insurance",
      amount: '627.12'
    }
  ]
  return<>
  <NewexpenseItem />
  <Expenseitem 
    title={ExpenseitemList[0].title}
    amount={ExpenseitemList[0].amount}
    date={ExpenseitemList[0].date}
  />
  <Expenseitem 
    title={ExpenseitemList[1].title}
    amount={ExpenseitemList[1].amount}
    date={ExpenseitemList[1].date}
  />
  <Expenseitem 
    title={ExpenseitemList[2].title}
    amount={ExpenseitemList[2].amount}
    date={ExpenseitemList[2].date}
  />
  </>
}

export default App;