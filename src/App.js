import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert } from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Alert>Will this work?</Alert>
        <Button>Text button</Button>
      </header>
    </div>
  )
}

export default App
