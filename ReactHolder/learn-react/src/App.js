import logo from './logo.svg';
import './App.css';
import JsxTest from './test/JsxTest';
import Bgrd from './test/Bgrd'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <JsxTest>13213</JsxTest>
        <Bgrd bdrdsize='5px' color="black" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
