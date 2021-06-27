import React, {useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Container from './components/Container.js';
import Form from './components/Form.js';
import TaskList from './components/TaskList.js';

function App() {
  const firstRender = useRef(true)
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if(inputValue.trim() === '') return

    setTaskList(prevTask => [
      ...prevTask, 
      {
        key: inputValue,
        id: uuidv4(),
      }
    ]);
    setInputValue("");
    
    
  }

  const removeTodo = (id) => {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  useEffect(() => {
    if(firstRender.current) { // if firstRender is true
      console.log('true')
      firstRender.current = false;
    } else {
      localStorage.setItem("Todo", JSON.stringify([...taskList])); // set item when we have the item
      console.log('not first page load');
    }
  }, [taskList]);

  useEffect(() => {
    if(localStorage.getItem("Todo") !== null) {
      const newTodos = localStorage.getItem("Todo");
      setTaskList(JSON.parse([...taskList, newTodos]));
    }
  }, [])

  return (
    <div className="App">
      <Container>
        <Form 
          setInputValue={setInputValue}
          inputValue={inputValue}
          handleAdd={handleAdd} />
        <TaskList
          taskList={taskList}
          removeTodo={removeTodo}
          firstLoad={firstRender.current} />
      </Container>
    </div>
  );
}

export default App;
