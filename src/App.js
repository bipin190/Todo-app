import React, {useState} from 'react';
import './App.css';
import Task from './components/Task';

function App() {

  const [currentTask, setCurrentTask] = useState(null);
  const [TaskList, updateTaskList] = useState([]);

  const onChangeHandler = e => {
    //debugger;
    console.log("current value", e.target.value);
    setCurrentTask(e.target.value);
  };

  const addTaskToList = () => {
    updateTaskList([...TaskList, {Task :currentTask, key: Date.now()}]);
    setCurrentTask("");
  };
  const handleKeyPress = (event) => {
    console.log("handler vitra");
    if(event.key === 'Enter'){
      console.log("enter pressed");
      addTaskToList();
    }
    
  }
  return (
    <div className="App">
      <div className ='wrapper'>
        <div className='input-wrapper'>
          <input placeholder='enter task' value={currentTask} onChange={onChangeHandler} onKeyPress={handleKeyPress} />
          <button onClick={addTaskToList} >add</button>
        </div>
        <Task TaskList = {TaskList} updateTaskList={updateTaskList} />
      </div>
    </div>
  );
}
 
export default App;
