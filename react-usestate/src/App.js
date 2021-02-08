import React, { useState } from 'react';
import Message from './Message';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false);
  return(
    <div className={`box ${isMorning? 'day' : ''}`}>
      <h2>Good {isMorning? 'Morining' : 'Night'}</h2>
      <Message counter={count}/>
      <br/>
      <button onClick={() => setCount(++count)}>Increment</button>
      <button onClick={() => setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
