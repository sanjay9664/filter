import React from "react";
import ExpenceForm from "./ExpenceForm";
import "./NewExpence.css";

const NewExpence = (props) => {
  const savehandler = (enteredExpenceDate)=>{

    const expenceData ={
       ...enteredExpenceDate,
       id:Math.random().toString()
    }
    // console.log(expenceData)
    props.onAddExpence(expenceData)
  }
  return (
    <div className="new-expense">
      <ExpenceForm  onSaveExpenceData={savehandler}/>
    </div>
  );
};

export default NewExpence;
