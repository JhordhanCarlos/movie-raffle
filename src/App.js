import React, { useState } from 'react';

import { GlobalStyle } from './global';
import { Header } from './components/Header';
import {QueueList} from './components/QueueList';
function App() {

  return (
  <>
    <GlobalStyle />
    <div className="App">
    <QueueList />
      <Header /> 
    </div>
  </>
  );
}

export default App;
