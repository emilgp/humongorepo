import React from 'react';
import './App.css';
import mjolnir from '@herogearstuffs/mjolnir';
import stormbreaker from '@herogearstuffs/stormbreaker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          your hammer thinks {mjolnir}
          <br />
          your axe thinks {stormbreaker}
        </h1>
      </header>
    </div>
  );
}

export default App;
