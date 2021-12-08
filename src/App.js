import React from 'react';
import Header from './Components/Header';
import Button from './Components/Button';
import Tasks from './Components/Tasks';
import { useState } from "react";


function App() {
  // we want this data to be part of our states so we use hook "useState".
    // tasks: name of state, setTasks:variable to change data/set new data. 
    //we used this data in the main component so that we don't use redux etc to retrieve this data
  const [tasks, setTasks] = useState (
    [
        {
            id: 1,
            text: 'Doctors appoiment' ,
            timing: 'November 8th at 2:20 pm',
            reminder: true
        },
        {
            id: 2,
            text:'University lecture',
            timing: 'Everyday from 11-15',
            reminder: true
        },
        {
            id: 3,
            text: 'Dinner at home',
            timing: 'November 5th at 6pm',
            reminder: false
        }
    ] )

  return (
    <div className="container">
      <Header title= 'Task Tracker'/>
      <Tasks tasks= {tasks} />  {/* setting tasks(a prop) equal to {tasks}(actual data), in order to send this props down to the component Tasks */}
     
    </div>
  );
}

export default App;
