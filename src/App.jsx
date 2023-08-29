import { useDispatch, useSelector } from 'react-redux'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment, incrementBy, reset } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter );

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          count is {counter}
        </p>
        <button onClick={ () => dispatch( increment() ) }>
          Incrementar
        </button>
        <button onClick={ () => dispatch( incrementBy(2) ) }>
          Incrementar por 2
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Reducir
        </button>
        <button onClick={ () => dispatch( reset() ) }>
          Reset
        </button>
      </div>
     
    </>
  )
}

export default App
