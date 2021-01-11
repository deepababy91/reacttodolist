import './App.css';
import React, {useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import { List, Typography, Divider, Input, Popconfirm, message } from 'antd';
import ToDoListItem from "./todolistitem";
import { Button} from 'react-bootstrap';
import {Tooltip } from 'antd';
import {EditOutlined} from '@ant-design/icons';
import { Checkbox } from 'antd';





function Todo() {
  
    const [todos,setTodos]=useState([])
    const [list,setList]=useState([])
 
    
   
 

  
    
const deleteUser=index =>{
const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    alert("Deleted")
  
  
}

const toggleComplete =i =>
setTodos(
    todos.map(
        (todo,k)=>
        k==i?{
            ...todo,
            complete:!todo.complete
        }:todo
    )
)



 
  




   

    return (
         

         
         <div className="App">
      
           <header className="App-header">
           <br/>
           <br/>
           {/* <h1 style={{textAlign:'center'}}>What do you want to do?</h1>*/}
            <br/>
           <div style={{paddingLeft:'10rem',paddingRight:'10rem'}}>
           <List 
      size="large"
      header={
          <div>Enter your task here
          
       <Input onPressEnter={
       
           (event) => {
                
              
            console.log(event.currentTarget.value)
        
            
                     let txt = event.currentTarget.value
        
                    setTodos(oldArray => [...oldArray, txt])
                   
                   


       
           }}
          
      
          /> <button type="submit">Submit</button>
       
           
        </div>}
      //footer={<div>Footer</div>}
      bordered
 
      dataSource={todos}
      renderItem={(item)=>{ 
          return <List.Item>
          
          <span style={{color:'green'}}> <Checkbox ></Checkbox>
          
          
          
          
          <Tooltip title="edit">
     
    <Button variant="gray"><EditOutlined /></Button>{' '}</Tooltip>{item}</span>


<Popconfirm
                         title="Are you sure?"
                        onConfirm={deleteUser}
                       
                    
                    
 

                       
                         // onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                      >
                         <Button variant="danger">Delete</Button>{' '}
                        
                      </Popconfirm>
                      
                      
                    
          </List.Item>}}
    />
    </div>
    <br/>
    <div style={{textAlign:'center'}}>
    <Button variant="danger">All</Button>{' '}
     <Button variant="danger">Active</Button>{' '}
      <Button variant="danger">Completed</Button>
      </div>
     
           <div>
           <div>
          {/* <h1 style ={{color:'black'}}>Names:</h1>
           <ul>
          {names.map((name)=> {
            return <li key={name} style={{color:'black'}}>{name}</li>})}
          </ul>*/}
           </div>
         

           </div>

              
            
      
                 
           
          <ul>
              {list.map((listItem, idx) => {
                  // return <li key={idx}>
                  //     {listItem}
                  // </li>

                  return <ToDoListItem listItem={listItem} />
              })}
          </ul>


        

             
                 
               

              
                 <br/>
             
                 
            </header>
           </div>
           
        );

    
    
}


export default Todo;

/*import React, { useState, useEffect } from 'react';
import './Todo.css';


function Task({ task, index, completeTask, removeTask }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

            <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            <button onClick={() => completeTask(index)}>Done</button>

        </div>
    );
}

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");
  

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function Todo() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([]);

    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) },[tasks]);


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">Pending tasks ({tasksRemaining})</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default Todo;*/