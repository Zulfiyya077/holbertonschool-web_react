import React from 'react';
import './App.css'
import holbertonLogo from './assets/holberton-logo.jpg'
function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>  {/* Böyük D olmalıdır? */}
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {currentYear} - holberton School</p>
      </div>
    </div>
  )
}

export default App