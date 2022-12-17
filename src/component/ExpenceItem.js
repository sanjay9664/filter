import React , {useState} from "react"
import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css';
import Card from './Card';
function ExpenceItem(props) {
// const data = new Date(2022,4,28);
// console.log(props)
// const Title = "Car insurence";
// const price = 294.98;

// const date = props.date.toLocaleString("en-US",{month:"long"})
// const year = props.date.toLocaleString("en-US",{day:"2-digit"})
// const day = props.date.getFullYear()

// 2nd method to updated 
  const [title , setTitle] = useState(props.title)
// console.log("excute the code")
 
const handler = ()=>{
  setTitle("new data")
  console.log(title)
}
// 1st method to do this updated 
// let title = props.title
// const handler = () =>{
//   title = "Updated!"
//   console.log(title)
// }
  return (
    // div replace in Card  and import here the Card
    <Card className='expense-item'> 
   <ExpenceDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={handler}>Updated</button>
    </Card>
  );
}

export default ExpenceItem;
