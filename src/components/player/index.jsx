import React from "react";
import Person from "../person";
import KeyPressed from "../../hooks/keys";
import Movement from "../../hooks/movement";

export default function Player({ skin }) {
    const { dir, step, move, position } = Movement(1);

    const data = {
        h: 32,
        w: 32
      };


      KeyPressed((e) => {
        const dir = e.key.replace("Arrow", "").toLowerCase()
        move(dir);
        if(dir === "up" || dir === "down" || dir === "left" || dir === "right") {
          e.preventDefault();
        }
  
      });

    return (
    <Person sprite={`/sprites/${skin}.png`} data={data} step={step} dir={dir} position={position} style={{position: "absolute"}} />
    );
  }