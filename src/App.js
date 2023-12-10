import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const rollDice = () => {
    dispatch({ type: 'roll' })
  }
  return (
    <div>
      <h1>Dice Roll</h1>
      <span>{counter}</span>
      <div>
        <button onClick={rollDice}>Click</button>
      </div>

    </div>
  );
}

export default App;
