import React, { useState } from "react";
import ExpenceItem from "./ExpenceItem";
// import ExpenceItem from "./component/ExpenceItem";
import ExpenceFilter from "./ExpenceFilter";
import "./Expence.css";
import Card from "./Card";
function Expence(props) {
  // console.log(props)
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };

  const filteredExpenses = props.arr.filter((expenc) => {
    return expenc.date.getFullYear().toString() === filteredYear;
  });

  let expenceContent = <p>No Expence found . </p>

   if(filteredExpenses.length > 0 ){
    expenceContent =  filteredExpenses.map((expenc) => (
      <ExpenceItem
        key={expenc.id}
        title={expenc.title}
        amount={expenc.amount}
        date={expenc.date}
      />
    ))
  
   }
  return (
    // line no 8 change the div with Card and export card
    <Card className="expence">
      <ExpenceFilter
        selected={filteredYear}
        onchangeFilter={filterChangeHandler}
      />
      {/* {filteredExpenses.length === 0 && <p>No Expense found .</p>} */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expense found .</p>
      ) : (
        filteredExpenses.map((expenc) => (
          <ExpenceItem
            key={expenc.id}
            title={expenc.title}
            amount={expenc.amount}
            date={expenc.date}
          />
        ))
      )} */}
  {expenceContent}
      {/* <ExpenceItem
        title={props.arr[0].title}
        amount={props.arr[0].amount}
        date={props.arr[0].date}
      />
      <ExpenceItem
        title={props.arr[1].title}
        amount={props.arr[1].amount}
        date={props.arr[1].date}
      />
      <ExpenceItem
        title={props.arr[2].title}
        amount={props.arr[2].amount}
        date={props.arr[2].date}
      />
      <ExpenceItem
        title={props.arr[3].title}
        amount={props.arr[3].amount}
        date={props.arr[3].date}
      /> */}
    </Card>
  );
}
export default Expence;
