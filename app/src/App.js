import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Prices from './components/Prices'
import Footer from './components/Footer'
import Search from './components/Search'
import Protein from './components/Protein'
import Tester from './components/Tester'

function App() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
        
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
                        <Route path="/search">
                            <Search />
                        </Route>
                        <Route path="/tester">
                            <Tester />
                        </Route>
                        <Route path="/protein">
                            <Protein />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </header>
            <Footer />
        </div>
    )
}

export default App;
