import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage';
import Logos from './components/Logos';
import Recommendations from './pages/recommends/Recommendations';
import ContactUs from './pages/ContactUs';
import Search from './pages/Search';
import axios from 'axios';

const apiKey = "3985477450bdec29762ee1b05f70d7ff8485aee50f4b5c5f55dd13e25224d95b"
const clientId = " MjU0MDg2NTN8MTY0MjU5MDE1NC4xNTEwNjk5"
const url2= `https://api.seatgeek.com/2/events?taxonomies.name=sports&client_id=${clientId}`
// const url = `https://api.seatgeek.com/2/events?client_id=${clientId}&client_secret=${apiKey}`
const url3= `https://api.seatgeek.com/2/events?taxonomies.name=nba&client_id=${clientId}&per_page=100&page=3`
const multiply = ` https://api.seatgeek.com/2/venues?per_page=25&page=3`
// const api2 = /houston-rodeo-livestock-show-and-rodeo-zac-brown-band-performance-tickets/sports/2012-03-12/739515/
function App() {
  const [count, setCount] = useState(0)
  const [games, setGames] = useState([])
useEffect(getGames, [])
  function getGames (){

    axios.get(url3)
    .then(function (response) {
    
      // axios.defaults.headers.common['header1'] = 'value' // for all requests
      console.log(response.data.events[0].title);
      setGames(response.data.events)
      
    }).catch(function (error) {
      console.error(error);
    });
  }
    

  





  return (
    <BrowserRouter>
    <div className="App">
    <Link to="/">Home Page</Link>
    <span> | </span>
    <Link to="/Recommendations">Recommendations</Link>
    <span> | </span>
    <Link to="/ContactUS">Contact Us</Link>
    <span> | </span>
    <Link to="/Search">Search</Link>

    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/Recommendations" component={Recommendations}/>
    <Route exact path="/ContactUs" render={()=> <ContactUs/>}></Route>
    <Route exact path="/Search" render={()=> <Search games={games} setGames={setGames}/>}></Route>


    </Switch>
      {/* <Logos/> */}
    </div>
    </BrowserRouter>

  )
}

export default App
