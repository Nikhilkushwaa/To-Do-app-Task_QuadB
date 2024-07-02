// This component renders an individual task item with options to toggle, edit, and delete the task.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../redux/actions';
import confetti from 'canvas-confetti';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);  // right now editing is false after clicking on edit button it will become true and below handle edit functin will start working
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      dispatch(editTask(task.id, newText));
    }
    setIsEditing(!isEditing);
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
    if (!task.completed) {
      confetti();        // Play  confetti animation when a task is marked as completed
    }
  };

  return (
    <div  className='addedTask task-item'  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? ( 
        <input 
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
       
      ) : (
        <span>{task.text}</span>
      )}
       

       {/* here i am toggling between Complete and undo button this will help in chaning text of complete to undo after clicking on it  */}
      <button className="completeBtn" onClick={handleToggle}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button className="deletebtn" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button className='hover-3 editbtn' onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button> 
      <div className="circle"></div>
    </div>
   
  );
};

export default TaskItem;

// So when a user clicks the "Complete" button then the toggleTask action is dispatched to update the task completed state in the Redux store. when a user clicks the "Delete" button the deleteTask action is dispatched to remove the task from the state.