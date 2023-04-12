import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [ currentTime, setCurrentTime ] = useState(0);
    const [ currentMessage, setCurrentMessage ] = useState(1);
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
                        <Route path="/login">
                            <p>Este es el login.</p>
                        </Route>
                        <Route path="/message">
                            <p className='text-white text-3xl p-20'>El mensaje es {currentMessage}.</p>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </header>
            <Footer />
        </div>
    )
}

export default App;
