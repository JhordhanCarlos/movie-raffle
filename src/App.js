import React, { useState } from 'react';

import { GlobalStyle } from './global';
import { Header } from './components/Header';
import {QueueList} from './components/QueueList';
import { RaffleProvider } from './hooks/useRaffle';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from './components/Home';
import { Raffle } from './components/Raffle';

function App() {

  return (
  <RaffleProvider>
    <Router>
  

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/search" element={<><Header /> <QueueList /></>} />
          
          <Route path="/raffle" element={<Raffle />} />
          
            
        
        </Routes>
    </Router> 
    

    <GlobalStyle />
  </RaffleProvider>
  );
}

export default App;
