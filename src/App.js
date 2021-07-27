import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/'>
          <HomePage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
