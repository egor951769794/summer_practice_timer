import { useState, useEffect } from 'react';
import Background from './components/Background/Background';
import Cube from './components/Cube/Cube';
import Panel from './components/Panel/Panel';


import beep from './sounds/beep.mp3'
import PlaySound from './components/PlaySound/PlaySound';

function App() {
  const [finished, finish] = useState(localStorage.getItem("finished") == null ? false : localStorage.getItem("finished"));

  const [turned, turn] = useState(localStorage.getItem("turned") == null ? false : localStorage.getItem("turned"));
  const [active, activate] = useState(localStorage.getItem("active") == null ? false : localStorage.getItem("active"));

  useEffect(() => {
    localStorage.setItem("finished", bool(finished))
  }, [finished]);

  
  let bool = (value) => {
    if (value === 'false') return false;
    else return value
}

  return (
    <div className="App">
      <Background isOver={bool(finished)}></Background>
      <Cube rotate={bool(turned) && bool(active)}></Cube>
      <Panel markAsFinished={finish} turn={turn} turned={turned} activate={activate} active={active}></Panel>
      {bool(finished) ? <PlaySound url={beep}></PlaySound> : null}
    </div>
  );
}

export default App;
