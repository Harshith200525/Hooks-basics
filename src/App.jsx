import { useState, createContext } from 'react';
import './App.css';
import UseContext from './components/UseContext';
import UseState from './components/Progression1';
import Progression2 from './components/Progression2';
import Progression3 from './components/Progression3';
import Progression4 from './components/Progression4';
import Progression5 from './components/Progression5'
import Progression6 from './components/Progression6';

export const ToggleTheme = createContext()

function App() {

  const [state,setState] = useState(true)
  

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <>
      <div>
      <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
      
    </ToggleTheme.Provider>
      </div>
      <div>
      <UseState />
      </div>
      <div>
        <Progression2 />
      </div>
      <div>
        <Progression3 />
      </div>
      <div>
        <Progression4 />
      </div>
      <div>
        <Progression5 />
      </div>
      <div>
      <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
        <Progression6 />
        </ToggleTheme.Provider>
      </div>
    </>
  );
}

export default App;
