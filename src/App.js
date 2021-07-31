import { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import FooterPart from './Components/FooterPart';
import HomePage from './Components/HomePage';
import NavBarPart from './Components/NavBarPart';

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarPart toggle={toggle} setToggle={setToggle}/>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <FooterPart/>
      </div>
    </BrowserRouter>
  );
}

export default App;
