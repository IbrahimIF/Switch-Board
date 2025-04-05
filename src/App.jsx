
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './MainLayout/mainLayout';
import RandomScreen from './Components/RandomScreen/RandomScreen';

function App() {

  const [counter, setCounter] = useState(0);



  return (
    <>
      <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Main counter={counter} setCounter={setCounter}/>} />
          <Route path="/Random" element={<RandomScreen counter={counter} setCounter={setCounter}/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
