import './App.css';
import { useState } from 'react';
import Textman from './Components/Textman';
// import Darkmode from './Components/Darkmode';
// import Counter from './Components/counter';
// import TextHandaling from './Components/TextHandaling';
// import Btnhandle from './Components/btnhandle';
// import Colorchnge from './Components/colorchnge';
// import Ccounter from './Components/Ccounter';
// import Stdlist from './Components/Stdlist';
// import Timer from './Components/Timer';
import Navbar from './Components/Navbar';
function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode == 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      document.body.style.transition = '1s all';

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.transition = '1s all';

    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Textman mode={mode} />
      {/* <Darkmode/>
      <Counter/>
      <TextHandaling/>
      <Btnhandle />
      <Colorchnge/>
      <Ccounter/>
      <Stdlist/>
      <Timer/> */}
    </>
  );
}

export default App;
