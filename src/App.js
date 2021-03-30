import './App.css'
import { useCounter } from './hooks/useCounter'

function App() {
  const [counter, increment, decrement] = useCounter() //Realizando o desestructuring do retorno do hook

  return (
    <div className="App">
      <h2 color="blue">{counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

export default App
