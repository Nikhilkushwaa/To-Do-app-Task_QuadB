// This component provides a place to add new tasks to the to-do list.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
  const [task, setTask] = useState('');

  const dispatch = useDispatch();    // this useDispatch is useDispatch()  to provide a way for components to interact with Redux without directly connecting them to the store in simple words after clicking on addtask button it will work and intract with redux .

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };
  //trim function is used to remove any extra space is entered by user by mistake this will improve user experience...
  //e.preventDefault() helps to submit task without reloading the page this also makes app faster and improve user experience..




// here below after cliling on add task button handlesubmit function that is defined above will run...
  return (
    <form onSubmit={handleSubmit}>
      <input   className='textarea'
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="  Add a new task here"
      />
      <button type="submit" className='text3d hover-2'>Add Task</button>
    </form>
  );
};




export default AddTask;
// When a user types a task into the input field and clicks "Add Task".. then the handleSubmit function is called after  This function ative the addTask action to add the new task to the Redux store..