import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Login from './view/Login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello ,world
          <Button type="primary">Button</Button>
          <Login></Login>
      </header>
    </div>
  );
}

export default App;
