import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const onChange = (e) => {
    let data = e.target?.value?.split('\n');
    data = data.map((element) => {
      return `https://supchat.taxi.yandex-team.ru/chat/${element}`;
    });
    setResult(data.join('\n'));
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <textarea onChange={onChange} style={{ height: '200px', width: "200px", fontSize: "7px" }}  />
          <textarea value={result} style={{ height: '200px', width: "300px", fontSize: "7px" }} />
        </div>
        <p>ОК на пуcтой!</p>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
