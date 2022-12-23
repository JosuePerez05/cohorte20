import logo from './logo.svg';
import './App.css';
import Micomponente from './MiComponente'
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
       </p>
         
      <Micomponente></Micomponente>
      <Micomponente></Micomponente>
      <Micomponente></Micomponente>
      </header>
    </div>
  );
}

export default App;
