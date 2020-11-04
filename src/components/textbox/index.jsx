import React from 'react';

export default function Textbox({ position }) {


  return (
    <form style={{
        position: "absolute",
        top: "800px",
        left: "1100px",
        color: "white",
    }}>
      <label>
        Messenger: 
        <input type="textarea" name="Say something..." />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}
