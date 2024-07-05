import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/taskList';
import AddTaskForm from './components/addTaskForm';
import EditTaskForm from './components/editTaskForm';

function App() {

  const [show, setShow] = useState<boolean>(false)

  return (
    <div className='w-1/2 mx-auto m-14'>
      <div className='mb-2 flex justify-between'>
        <h5 className='text-2xl'>Tasks to do</h5>
        <button className='text-lime-600' onClick={() => { setShow(!show) }}>+ Adicionar</button>
      </div>
      <div className="mb-3 w-100 h-px bg-white mx-auto"></div>
      {show && (
        <AddTaskForm />
      )}
      <TaskList /> 
    </div>
  );
}

export default App;
