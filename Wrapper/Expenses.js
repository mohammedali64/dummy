import ExpenseItem from "./ExpenseItem.js"
import "./ExpenseItem.css"
import Card from "./Card.js"


export default function Expenses(props) {
  return (
    <Card className = 'expenses'>
      {props.expenses.map((obj) => {
        return(
        <ExpenseItem
          id={obj.id}
          title={obj.title}
          date={obj.date}
          price = {obj.price}
        />
  )})}
    </Card>
  )
}