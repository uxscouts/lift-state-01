import { useState } from 'react'
import ParentComponent from "./components/ParentComponent";
import ParentDropDown from "./components/ParentDropDown";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className="container">
      <ParentComponent/>
      <hr/>
      <ParentDropDown/>
    </div>
  )
}

export default App
