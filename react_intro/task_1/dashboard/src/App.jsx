import React from 'react';
import './App.css';
import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';
// import holbertonLogo from './assets/holberton-logo.jpg';

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <div style={{
          width: '200px', 
          height: '200px', 
          background: '#e1003c', 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginRight: '1rem',
          fontWeight: 'bold'
        }}>
          HOLBERTON
        </div>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
      </div>
    </>
  )
}

export default App