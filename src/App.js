import './App.css';
import Componenet1 from './HighOrderComponents/Componenets/Componenet1';
import PureClass from './PureComponents/Pure-Class';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Higher-Order Componenet</h2>
        <Componenet1 />
      </div>
      <div>
        <h2>Pure Componenet</h2>
        <ol>
          <div>Pure-Componenets(By function)</div>
          <div>Pure-Componenets(By Class)</div>
        </ol>
        <h3>This is Class Based Pure Componenets</h3>
        <PureClass />
      </div>
    </div>
  );
}

export default App;
