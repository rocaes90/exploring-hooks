import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Header from './Components/Header';

import Button from './Components/Button';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import Topics from './Components/Topics';

import './App.css';


function App() {
  return (
    <div className='wrapper'>
      <I18nextProvider i18n={i18n}>
        <Router>
          <div>
            <Header />

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/users" component={Users} />
            <Route path="/topics" component={Topics} />
          </div>
          <Button />
        </Router>
      </I18nextProvider>
    </div>
  );
}

export default App;
