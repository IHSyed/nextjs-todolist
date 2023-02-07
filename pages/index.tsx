"use client"

import React, {useState} from "react"

  export default function Todo() {
  
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const[todo, setTodo] = useState('')
      const[todos, setTodos] = useState ([
        {todoText : "To do 1", completed: false},
        {todoText : "To do 2", completed: false},
        {todoText : "To do 3", completed: false},
        {todoText : "To do 4", completed: false},
        {todoText : "To do 5", completed: false},

      ]);
  
    const onClickHandler = (newElm : any) => {
    console.log("newElm :", newElm); 

    //In JS, map runs on an Array, and returns an Array

    const newTodos = todos.map((todo : any) => {
      console.log("todo :", todo);

      if (todo.todoText ==  newElm.todoText) {

        todo.completed = !todo.completed; // Makes True as False and False as True in lines 39 to 43
      }

      return todo;

    });

    console.log(newTodos);
    setTodos(newTodos);

    };

    const addTodo = () => { const newTodo = {todoText : todo, completed : false}
    const newTodos = [...todos, newTodo]
    setTodos(newTodos);}

    const deleteTodo = (delTodo : any) => {
      const newTodos = todos.filter (todo => {
        if (todo.todoText == delTodo.todoText)

        return false;
        return true;
      });

      console.log("Old Todos" , todos, "New Todos", newTodos );

      setTodos(newTodos);

    };

  return (
    <>
    <h1> To Do List</h1>
    <br/>
    <h2> Today's Date is : {date} </h2>
    <br/>

     <input placeholder=" Additions to the To Do List." value = {todo} onChange = {(e) => setTodo(e.target.value)} />

     <button onClick={addTodo}> Add </button>
  
    <ul>

      {todos.map((elm : any) => {
        // map works here to run a LOOP
        // elm is ELEMENT
        return(

          <li

          style = {{color : elm.completed ? "green" : "orange",
          fontStyle :"oblique",
          listStyle : "none"
          }}

          key = {elm.todoText}
        
         >
          
        

          < input
            type = "checkbox"
            checked = {elm.completed}
            onChange = {() => {
              onClickHandler(elm);
          }}
        
          />

          {elm.todoText}

          <button style = {{backgroundColor : "light blue", margin : 20, display :"inline-block" }}> Delete </button>
          <button onClick={() =>deleteTodo(elm)}></button>

          </li>
        );
      })};
      
    </ul>
  
  </>
  );
  }
    
  