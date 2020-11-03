import React from "react";
import Person from "../person";

export default function Player({ skin }) {
    const data = {
        h: 32,
        w: 32
      };
    return <Person sprite={`/sprites/${skin}.png`} data={data} />
}