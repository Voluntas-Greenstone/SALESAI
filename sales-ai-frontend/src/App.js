import React from 'react';
import './App.css';
import Header from './Header';  // Ensure this import is correct based on your file structure
import Footer from './Footer';  // Ensure this import is correct based on your file structure
import Sidebar from './Sidebar';  // Ensure this import is correct based on your file structure
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main className="App-main">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-container">
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
            <button className="App-button">Get Started</button>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  );
}

export default App;
/* Test comment */
