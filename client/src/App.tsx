import React from 'react';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Header, Body, Footer } from './components';
import AppProvider from './appProvider';

function App() {

  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Body />
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
