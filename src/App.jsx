
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Hub from './Components/Hub';
import RandomScreen from './Components/RandomScreen/RandomScreen';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hub />} />
          <Route path="/Random" element={<RandomScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
