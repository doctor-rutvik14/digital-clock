import React ,{useState, Button, Card}from 'react';
import './App.css';
import './index.css'

function App() {
  let t = new Date().toLocaleTimeString();
  const [tym,setTym] = useState(t);  
  const Show = () => {
    t = new Date().toLocaleTimeString();
    setTym(t);
  }
  setInterval(Show,1000);
  return (
    <div className="App">
     <h1>{tym}</h1>
    </div>
  );
}
export default App;

