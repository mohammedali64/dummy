import ExpenseDate from "./ExpenseDate.js"
import "./ExpenseDate.css"
import Card from "./Card";

export default function ExpenseItem(props) {
  return (
    <Card className = 'expense-item'>
      <ExpenseDate date={props.date} />
      <div className = 'expense-item__description'>
        <h2>{props.title}</h2>
        <div className = 'expense-item__price'>${props.price}</div>
      </div>
    </Card>
  )
}