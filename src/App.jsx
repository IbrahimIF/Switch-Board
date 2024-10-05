
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Hub from './Components/Hub';
import RandomScreen from './Components/RandomScreen/RandomScreen';

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Hub counter={counter} setCounter={setCounter}/>} />
          <Route path="/Random" element={<RandomScreen counter={counter} setCounter={setCounter}/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
