import { useState } from 'react';
import Background from './components/Background/Background';
import Cube from './components/Cube/Cube';
import Panel from './components/Panel/Panel';

function App() {
  const [finished, finish] = useState(0);
  return (
    <div className="App">
      <Background isOver={finished}></Background>
      <Cube></Cube>
      <Panel markAsFinished={finish}></Panel>
    </div>
  );
}

export default App;
