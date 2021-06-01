import React, { useState } from "react";
import "./NewexpenseForm.css";

const NewexpenseForm = ()=>{
     
    const [enteredTitle , setenteredTitle] = useState("");
    const changetitleHandler = (event)=>{
        setenteredTitle(event.target.value);
    }

    const [enteredAmount , setenteredAmount] = useState("");
    const changeamountHandler = (event)=>{
        setenteredAmount(event.target.value);
    }

    const [enteredDate , setenteredDate] = useState("");
    const changedateHandler = (event)=>{
        setenteredDate(event.target.value);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
    };

    return<>
    <form onSubmit={submitHandler}>
        <div className="expenseform_container">
            <label>Title</label>
            <input onChange={changetitleHandler} type="text"/>
            <label>Amount</label>
            <input onChange={changeamountHandler} type="number" min="0.01" step="1"></input>
            <label>Date</label>
            <input onChange={changedateHandler} type="date" min="2019-01-01" max="2022-01-01"></input>
            <button className="SubmitButton" type="submit">Submit</button>
        </div>
        </form>
    </>
};

export default NewexpenseForm;