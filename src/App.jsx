import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import CounterApp from './components/CounterApp';
import DynamicDemo from './components/DynamicDemo';
import Navbar from './components/page/Navbar';
import Footer from './components/page/Footer';
import { useState } from 'react';
import Home from './components/page/Home';
import Contact from './components/page/Contact';
import About from './components/page/About';
function App() {
  const [Content, setContent] = useState(<Home/>);

  return (
    <>
      <Navbar/>
      <ul>
        <li>
          <button onClick={()=>{setContent(<Home/>)}}>Home</button>
          <button onClick={()=>{setContent(<About/>)}}>About</button>
          <button onClick={()=>{setContent(<Contact/>)}}>Contact</button>
        </li>
      </ul>
      {Content}
      <Footer/>
    </>
  );
}


export default App;
