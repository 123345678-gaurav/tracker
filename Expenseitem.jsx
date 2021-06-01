import React, { useState } from "react";
import "./Expenseitem.css";


const Expenseitem = (props)=>
{
  
  
  const[Title , Settitle] = useState(props.title);
  const handleclick= ()=>
  {
   console.log("Clicked");
   Settitle("Updated!");
  }

  return<>
    
    <div className="Expenseitem_body">
      <div className="Expenseitem_container">
        <div className="Expenseitem_date">{props.date}</div>
        <h1 className="Expenseitem_name">{Title}</h1>
        <div className="Expenseitem_price">{props.amount}</div>
        <button onClick={handleclick} className="ChangeTitle_button">Change Title</button>
      </div>
  </div>
    
  </>
}

export default Expenseitem;