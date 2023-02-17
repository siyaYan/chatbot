// import logo from './logo.svg';
import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useState } from "react";

// function based component
function App() {
  // let count = 0 ;
  const[count, setCount]=useState(0);
  const[tasks, setTasks]=useState([
    {id:132,name:'record', completed: true},
    {id:223,name:'allen',completed: false},
    {id:312,name:'siya',completed: false}
  ]);
  const[show, setShow]=useState(true);
  
  function handleAdd(){
    setCount(count+1);
    // console.log(count);
    setCount(count => count+1);
    setCount(count => count+1);
  }
  function handleSub(){
    setCount(count-1);
    // console.log(count);
  }
  function handleReset(){
    setCount(0);
    // console.log(count);
  }
  function handleDelete(id){
    setTasks(tasks.filter(task => id!==task.id))
    // console.log(id);
  }


  return (
    <>
    <Header/>
    <div>
      <h1>Task List</h1>
      <ul>
        <button onClick={() => setShow(!show)}>trigger</button>
        {show && tasks.map((task) => (
          // we need a unique key value
          <li key={task.id} className={task.completed ? "completed":"incomplete"}>
            <span>{task.id} - {task.name}</span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
        
      </ul>
      <h3>{count}</h3>
      <button onClick={handleAdd}>ADD+3</button>
      <button onClick={handleSub}>SUB-1</button>
      <button onClick={handleReset}>Reset=0</button>

    </div>
    <Footer/>
    </>
  );
}

export default App;
