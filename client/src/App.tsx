import Apollo from './apollo/Apollo'
import Router from './router/router'
import Context from './context/Context'

function App() {
  return (
    <Apollo>
      <Context>
        <Router/>
      </Context>
    </Apollo>
  )
}

export default App
