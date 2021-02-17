import React, { Component } from 'react'
import Board from './Board';
import '../styles/main.css'

class Main extends Component {
  render() {
    return (
      <div id="mainWrap">
        <Board />
      </div>
    )
  }
}

export default Main;