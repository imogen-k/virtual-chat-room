import React from "react";
import Sprite from "../sprites";

export default function Person({ sprite, data, step = 0, dir = 0 }) {
    const { h, w } = data;
    
    return <Sprite image={sprite} 
        data={{
            x: step * w,
            y: dir * h,
            w,
            h
          }} 
          />
}