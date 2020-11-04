import React from 'react';
import Player from './components/player';
import Background from './components/background';
import Chatroom from './components/chatroom';

export default function App() {
  return (
    <div className="textbox-container">
      <Chatroom />
      <div className="zone-container">
        <Player skin="f1" />
        <Background />
      </div>
    </div>
  );
}
