import React, { useState } from "react";
import "./ExpenceForm.css";
const ExpenceForm = (props) => {

// *************************************have 3 state***************************
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");


//   yaha ek state me me hi 3no state ko store karenge  ex 

// const [userInp , setUserInp] = useState({

    // enterTitle: "",
    // enterAmount: "",
    // enterDate : ""
// });

// *************************************have 3 state***************************


// *************************************have 3 handler***************************
  const titleHandler = (event) => {
    // first way to call useState 
     
    setEnterTitle(event.target.value);

    // second way to call useState 
    // setUserInp({
    // ...userInp,
    // enterTitle:event.target.value 

    // })

    // third way to write the useState code is 

    // setUserInp((sanjay)=>{
    //     return{...sanjay, enterTitle:event.target.value}
    // })
  };

  const AmountHandler = (event) => {
    setEnterAmount(event.target.value);
//     setUserInp({
//         ...userInp,
//         enterAmount: event.target.value
//     })
  };

  const DateHandler = (event) => {
    setEnterDate(event.target.value);
//    setUserInp({
//     ...userInp,
//     enterDate:event.target.value
//    })
  };
//   *************************************have 3 handler ***************************
   const submithandler =(event) =>{
    event.preventDefault();

    const expenceDate={
        title : enterTitle ,
        amount :enterAmount,
        date : new Date(enterDate)
    };
    // console.log(expenceDate)
    props.onSaveExpenceData(expenceDate)

    setEnterTitle("")
    setEnterAmount("")
    setEnterDate("")
   }
    
  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={AmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={DateHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};
export default ExpenceForm;


