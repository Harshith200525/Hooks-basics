import { useState, createContext } from 'react';
import './App.css';
import UseContext from './components/UseContext';

export const ToggleTheme = createContext()

function App() {

  const [state,setState] = useState(true)
  

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <>
      <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
      
    </ToggleTheme.Provider>
    </>
  );
}

export default App;
