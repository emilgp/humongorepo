import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          hodor {process.env.REACT_APP_STAGE}
        </h3>
      </header>
    </div>
  );
}

export default App;
