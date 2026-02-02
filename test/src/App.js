import './App.css';
import { useState } from 'react';
import Textman from './Components/Textman';
import Darkmode from './Components/Darkmode';
import Counter from './Components/counter';
import TextHandaling from './Components/TextHandaling';
import Btnhandle from './Components/btnhandle';
import Colorchnge from './Components/colorchnge';
import Ccounter from './Components/Ccounter';
import Stdlist from './Components/Stdlist';
import Navbar from './Components/Navbar';
import Timer from './Components/Timer';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.transition = '1s all';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.transition = '1s all';
    }
  }; // Added closing brace and semicolon for the function

  return (
    <>

      <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/Timer" element={<Timer mode={mode} />} />
        </Routes>
        <Routes>
          <Route exact path="/Textman" element={<Textman mode={mode} />} />
        </Routes>
        <Routes>
          <Route exact path="/TextHandaling" element={<TextHandaling mode={mode} />} />
        </Routes>
        <Routes>
          <Route exact path="/Stdlist" element={<Stdlist mode={mode} />} />
        </Routes>
        <Routes>
          <Route exact path="/Darkmode" element={<Darkmode mode={mode} />} />
        </Routes>
        <Routes>
          <Route exact path="/counter" element={<Counter mode={mode} />} />
        </Routes>
        <Routes>
          <Route exact path="/colorchnge" element={<Colorchnge mode={mode} />} />
        </Routes>
          
      </BrowserRouter>

    </>
  );
}

export default App;