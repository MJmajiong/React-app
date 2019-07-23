import React from 'react';
import logo from './logo.svg';
import Button from 'antd/es/button'
import Input from 'antd/es/input'
import './App.css';

function App() {
  return (
    <div className="App">
        <Input type="text" placeholder="搜索"></Input>
        <Button type="primary">button</Button>
    </div>
  );
}

export default App;
