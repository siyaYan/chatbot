// import logo from './logo.svg';
import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useState } from "react";

// function based component
function App() {
  // let count = 0 ;
  const[count, setCount]=useState(0);
  const test="testing";
  
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
  return (
    <>
    <Header/>
    <TaskList title="value" info={test}/>
    <div>

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
