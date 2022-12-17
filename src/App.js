import React, {useState} from "react";
import "./App.css";
import Expence from "./component/Expence";
import NewExpence from "./component/NewExpence/NewExpence";
// import ExpenceItem from "./component/ExpenceItem";

const dummy_code = [
  {
    id: "1",
    title :"Toilet paper",
    amount: "$245.5",
    date : new Date(2022, 4,25)
  },
  {
   id: "2",
   title :"Shop",
   amount: "$115.5",
   date : new Date(2021, 5,23)
 },
 {
   id: "3",
   title :"Movie",
   amount: "$245.5",
   date : new Date(2019, 6,21)
 },
 {
   id: "4",
   title :"Grossery",
   amount: "$2245.5",
   date : new Date(2023, 5,6)
 }
  ]
 
const  App = () => {
   const [arr, setArray]=useState(dummy_code)
   const  addExpenceHandler = expenc =>{
    // console.log("In App.js")
    // console.log(expenc)
    setArray((prevExpence) =>{
      return [expenc , ...prevExpence]
    })
    }
//  const arr = [
//  {
//    id: "1",
//    title :"Toilet paper",
//    amount: "$245.5",
//    date : new Date(2022, 4,25)
//  },
//  {
//   id: "2",
//   title :"Shop",
//   amount: "$115.5",
//   date : new Date(2021, 5,23)
// },
// {
//   id: "3",
//   title :"Movie",
//   amount: "$245.5",
//   date : new Date(2019, 6,21)
// },
// {
//   id: "4",
//   title :"Grossery",
//   amount: "$2245.5",
//   date : new Date(2023, 5,6)
// }
//  ]

    
  return (
    <>
      {/* <h1>Lets start</h1> */}
     
      {/* <ExpenceItem title={arr[0].title} amount={arr[0].amount} date={arr[0].date} />
      <ExpenceItem title={arr[1].title} amount={arr[1].amount} date={arr[1].date} />
      <ExpenceItem title={arr[2].title} amount={arr[2].amount} date={arr[2].date} />
      <ExpenceItem title={arr[3].title} amount={arr[3].amount} date={arr[3].date} />   */}
   <NewExpence onAddExpence={addExpenceHandler}/>
    <Expence arr={arr}/>
    
    </>
  );
}

export default App;
