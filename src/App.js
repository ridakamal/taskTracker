import React from 'react';
import Header from './Components/Header';
import Button from './Components/Button';
import Tasks from './Components/Tasks';


function App() {
  return (
    <div className="container">
      <Header title= 'Task Tracker'/>
      <Tasks />
    </div>
  );
}

export default App;
