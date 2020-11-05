
import Player from './components/player';
import Background from './components/background';
import Chatroom from './components/chatroom';
import React, { Component } from 'react'

export default class App extends Component {

render() {
  
  return (
    
    <div className="textbox-container">
      <Chatroom />
      <div className="zone-container">
        <Player skin="f1" />
        <Background />
      </div>
    </div>
  )
}
}
