import { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import FooterPart from './Components/FooterPart';
import HomePage from './Components/HomePage';
import NavBarPart from './Components/NavBarPart';
import Electronics from './Pages/Electronics';
import Accessories from './Pages/Accessories';
import AllCategories from './Pages/AllCategories';
import Computers from './Pages/Computers';
import Jewellery from './Pages/Jewellery';
import KidsWaer from './Pages/KidsWaer';
import Men from './Pages/Men'
import MobilePhones from './Pages/MobilePhones';
import Shoes from './Pages/Shoes';
import SmartWatches from './Pages/SmartWatches';
import Women from './Pages/Women';
import Toys from './Pages/Toys'
import GiftCorners from './Pages/GiftCorners'
import Sports from './Pages/Sports'
import Register from './Pages/Register/Register';
import Card from './Pages/Card';

function App() {
  const [toggle, setToggle] = useState(false)
  const [signupToggle, setSignupToggle] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarPart toggle={toggle} setToggle={setToggle}/>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/all-categories'>
          <AllCategories/>
        </Route>

        <Route path='/men'>
          <Men/>
        </Route>

        <Route path='/women'>
          <Women/>
        </Route>

        <Route path='/electronics'>
          <Electronics/>
        </Route>

        <Route path='/mobile-phones'>
          <MobilePhones/>
        </Route>

        <Route path='/computers'>
          <Computers/>
        </Route>

        <Route path='/smartWatches'>
          <SmartWatches/>
        </Route>

        <Route path='/accessories'>
          <Accessories/>
        </Route>

        <Route path='/jewellery'>
          <Jewellery/>
        </Route>

        <Route path='/shoes'>
          <Shoes/>
        </Route>

        <Route path='/kidsWaer'>
          <KidsWaer/>
        </Route>

        <Route path='/sports'>
          <Sports/>
        </Route>

        <Route path='/toys'>
          <Toys/>
        </Route>

        <Route path='/giftCorners'>
          <GiftCorners/>
        </Route>

        <Route path='/register'>
          <Register signupToggle={signupToggle} setSignupToggle={setSignupToggle}/>
        </Route>

        <Route path='/card'>
          <Card/>
        </Route>

        <FooterPart/>
      </div>
    </BrowserRouter>
  );
}

export default App;
