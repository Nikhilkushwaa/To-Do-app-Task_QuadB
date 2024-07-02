
//  This is the main component of the application that includes AddTask and TaskList components.
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './index.css';
// import Drag from './Drag';
function App() {
  return (
    
    <div className="App" >
   
      <h1 className='head'>To-Do List</h1>
      <AddTask />
      <TaskList />
   

   {/* This ticket wrap div is for that continousely looping moving  line in app */}
      <div className="ticker-wrap">
<div className="ticker">
  <div className="ticker__item">THANKYOU QuadB Tech FOR THIS OPPORTUNITY</div>
   <div className="ticker__item">THIS TO-DO APP IS INTERNSHIP TASK MADE IN GIVEN DEADLINE </div> 
  <div className="ticker__item">MULTIPLE ANIMATIONS ARE ADDED IN IT AS MUCH AS POSSIBLE IN 24 HOURS </div>
  <div className="ticker__item">SOME ANIMATIONS ARE INSPIRED FROM OTHER WEBSITES BUT 100% CODE IS SELF WRITTEN BY ME</div>
  <div className="ticker__item">WELCOME TO MY PLAYGROUND</div>
  <div className="ticker__item">THANKYOU QuadB Tech FOR THIS OPPORTUNITY</div>
   <div className="ticker__item">THIS TO-DO APP IS INTERNSHIP TASK MADE IN GIVEN DEADLINE </div> 
  <div className="ticker__item">MULTIPLE ANIMATIONS ARE ADDED IN IT AS MUCH AS POSSIBLE IN 24 HOURS </div>
  <div className="ticker__item">SOME ANIMATIONS ARE INSPIRED FROM OTHER WEBSITES BUT 100% CODE IS SELF WRITTEN BY ME</div>
  <div className="ticker__item">THANKYOU QuadB Tech FOR THIS OPPORTUNITY</div>
   <div className="ticker__item">THIS TO-DO APP IS INTERNSHIP TASK MADE IN GIVEN DEADLINE </div> 
  <div className="ticker__item">MULTIPLE ANIMATIONS ARE ADDED IN IT AS MUCH AS POSSIBLE IN 24 HOURS </div>
  <div className="ticker__item">SOME ANIMATIONS ARE INSPIRED FROM OTHER WEBSITES BUT 100% CODE IS SELF WRITTEN BY ME</div>
  <div className="ticker__item">WELCOME TO MY PLAYGROUND</div>
  <div className="ticker__item">THANKYOU QuadB Tech FOR THIS OPPORTUNITY</div>
   <div className="ticker__item">THIS TO-DO APP IS INTERNSHIP TASK MADE IN GIVEN DEADLINE </div> 
  <div className="ticker__item">MULTIPLE ANIMATIONS ARE ADDED IN IT AS MUCH AS POSSIBLE IN 24 HOURS </div>
  <div className="ticker__item">SOME ANIMATIONS ARE INSPIRED FROM OTHER WEBSITES BUT 100% CODE IS SELF WRITTEN BY ME</div>
  <div className="ticker__item">THANKYOU QuadB Tech FOR THIS OPPORTUNITY</div>
   <div className="ticker__item">THIS TO-DO APP IS INTERNSHIP TASK MADE IN GIVEN DEADLINE </div> 
  <div className="ticker__item">MULTIPLE ANIMATIONS ARE ADDED IN IT AS MUCH AS POSSIBLE IN 24 HOURS </div>
  <div className="ticker__item">SOME ANIMATIONS ARE INSPIRED FROM OTHER WEBSITES BUT 100% CODE IS SELF WRITTEN BY ME</div> 
  <div className="ticker__item">CLICK ON ANYTHING COLORFUL FOR A NEW COLOR</div>
  <div className="ticker__item">TRY MOVING THINGS AROUND</div>
  <div className="ticker__item">THANKYOU QuadB Tech FOR THIS OPPORTUNITY</div>
   <div className="ticker__item">THIS TO-DO APP IS INTERNSHIP TASK MADE IN GIVEN DEADLINE </div> 
  <div className="ticker__item">MULTIPLE ANIMATIONS ARE ADDED IN IT AS MUCH AS POSSIBLE IN 24 HOURS </div>
  <div className="ticker__item">SOME ANIMATIONS ARE INSPIRED FROM OTHER WEBSITES BUT 100% CODE IS SELF WRITTEN BY ME</div>
</div>
</div>
{/* This ticket wrap div is for that continousely looping moving  line in app */}



    </div>
    
  );
  
}


export default App;
// The App component renders the AddTask component where users can add new tasks and the TaskList component which displays the list of tasks and handles task actions like toggling, editing , and deleting...