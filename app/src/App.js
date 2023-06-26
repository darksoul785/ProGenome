import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Prices from './components/Prices'
import Footer from './components/Footer'
import Search from './components/Search'
import { AppRouter } from './components/AppRouter';

function App() {
        
    return (

        <BrowserRouter>
        
            <AppRouter/>
        
        </BrowserRouter>

    )
}

export default App;
