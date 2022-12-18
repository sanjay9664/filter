//yaha pe fillter wale file ko save kar rahe hai 

import React from "react";
import "./ExpenceList.css";
import ExpenceItem from "./ExpenceItem";
const ExpenceList = (props) => {
//   let expenceContent = <p>No Expence found . </p>;

  if (props.arr.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expences .</h2>
  }

  return <ul className="expenses-list">
  {props.arr.map((expenc) => (
      <ExpenceItem
        key={expenc.id}
        title={expenc.title}
        amount={expenc.amount}
        date={expenc.date}
      />
    ))
    }
  </ul>
};

export default ExpenceList;
