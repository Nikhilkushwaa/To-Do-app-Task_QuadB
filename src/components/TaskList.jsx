// This component renders the list of tasks and manages loading and saving tasks from to local storage...

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTasks } from '../redux/actions';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(loadTasks(storedTasks));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
// When the app loads then the useEffect hook in TaskList runs the loadTasks action to load tasks from local storage. The tasks are then displayed by mapping over the state and rendering TaskItem components for each task.