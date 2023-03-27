import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ currentTime, setCurrentTime ] = useState(1);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Link className="App-link" to="/" onClick={() => {window.location.href="/"}}>Home</Link> /
            <Link className="App-link" to="/login" onClick={() => {window.location.href="/login"}}>Login</Link>
          </div>
          <Switch>
            <Route exact path="/">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <p>La hora es {currentTime}.</p>
            </Route>
            <Route path="/login">
              <p>Este es el login.</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
