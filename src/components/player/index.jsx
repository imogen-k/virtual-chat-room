import React from "react";
import Person from "../person";
import KeyPressed from "../../hooks/keys";
import Movement from "../../hooks/movement";

export default function Player({ skin }) {
    const { dir, step, move, position } = Movement(3);

    const data = {
        h: 32,
        w: 32
      };


      KeyPressed((e) => {
        move(e.key.replace("Arrow", "").toLowerCase());
        e.preventDefault();
      });

    return (
    <Person sprite={`/sprites/${skin}.png`} data={data} step={step} dir={dir} position={position} />
    );
  }