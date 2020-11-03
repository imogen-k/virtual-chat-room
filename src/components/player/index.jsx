import React from "react";
import Person from "../person";
import KeyPressed from "../../hooks/keys";

export default function Player({ skin }) {
    const data = {
        h: 32,
        w: 32
      };

      KeyPressed((e) => {
        const dir = e.key.replace("Arrow", "").toLowerCase()
        console.log(dir)
      })

    return <Person sprite={`/sprites/${skin}.png`} data={data} />
}