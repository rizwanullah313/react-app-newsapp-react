// import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
   // let a = "rizwan ullah";
    return (
      <div>
        {/* hello first class based component {a} */}
        <Navbar />
        <News />
      </div>
    )
  }
}
