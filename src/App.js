import { useState } from 'react';
import './App.css';
import lucas0 from './lucas0.jpg';
import lucas1 from './lucas1.jpg';
import lucas2 from './lucas2.jpg';

function App() {
  const [slideImg, setSlideImg] = useState(0)

  const slideSwitch = (direction="forward") => {

  }

  return (
    <>
      <div id="title-container">
        <span id='title'>
          Lucas Patten
        </span>
      </div>
      <div id='imageslide'>
        <span id="slide-back">&lt;</span>
        <img className='backgroundImage' src={lucas0} alt="background" />
        <img className="image" src={lucas0} alt='Lucas'/>
        <span id="slide-forward">&gt;</span>
      </div>
    </>
  );
}

export default App;
