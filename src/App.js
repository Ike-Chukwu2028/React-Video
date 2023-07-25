import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Component/Navbar';
import Counter from './Hooks/Counter';
import Gitsearch from './Hooks/Gitsearch';
import Fetch from './Pages/fetch';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/home' element= {<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element= {<Contact/>} />
      <Route path='/counter' element= {<Counter />} />
      <Route path='/gitsearch' element= {<Gitsearch />} />
      <Route path='/fetch' element={<Fetch />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
