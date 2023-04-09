
import { useState } from 'react';
import './App.css';
import { Text } from './Text';


function App() {
const [showText, setShowText] =  useState(false);

  return (
    <div className = "App">
      <button onClick= {()=> {
        setShowText(!showText);
      }}>Show / Hide</button>
    {showText && <Text />}
    </div>
  );
}

export default App;
