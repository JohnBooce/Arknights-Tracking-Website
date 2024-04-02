import { useState , useEffect} from 'react'
import './App.css'
import axios  from 'axios'
import OperatorList from './components/OperatorList/operatorList'
import Navbar from './components/navbar'
import Operator from './components/operators.json'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
