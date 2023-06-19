import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Search from './components/Search'

function App() {
    const [ currentTime, setCurrentTime ] = useState(0);
    const [ currentMessage, setCurrentMessage ] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        })
    }, [])
  
    useEffect(() => {
        fetch('/message').then(res => res.json()).then(data => {
            setCurrentMessage(data.message);
        })
    }, [])

    useEffect(() => {
        async function fetchData() {
          const urlParams = new URLSearchParams(window.location.search);
          const inputValue = urlParams.get('input');
          const response = await fetch(`/search?input=${inputValue}`);
          const data = await response.json();
          setSearchValue(data.value);
        }
    
        fetchData();
      }, []);
      
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Hero   />
                            <About  />
                            <Prices />
                        </Route>
                        <Route path="/message">
                            <p className='text-white text-3xl p-20'>El mensaje es {currentMessage}.</p>
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </header>
            <Footer />
        </div>
    )
}

export default App;
