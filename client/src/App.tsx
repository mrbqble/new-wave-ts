import Apollo from './apollo/Apollo';
import Context from './context/Context';
import Router from './router/router';

function App() {
  return (
    <Apollo>
      <Context>
        <Router />
      </Context>
    </Apollo>
  );
}

export default App;
