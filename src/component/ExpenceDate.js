import './ExpenceData.css'
function ExpenceDate(props){

const date = props.date.toLocaleString("en-US",{month:"long"})
const year = props.date.toLocaleString("en-US",{day:"2-digit"})
const day = props.date.getFullYear()

return(
    <div className="expense-date">
    <div className="expense-date__month">{date}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
    </div>  
)
}

export default ExpenceDate;