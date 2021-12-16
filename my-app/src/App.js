import React from "react";
import './App.css';

import Help from "help-app/Help";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
      </header>
      <React.Suspense fallback="loading">
          <Help />
      </React.Suspense>
    </div>
  );
}

export default App;
