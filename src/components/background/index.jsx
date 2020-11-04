import React from "react";

export default function Background({ image, position }) {
return <div style={{
    position: "inline-block",
    height: "800px",
    width: "1000px",
    backgroundImage: "url(/backgrounds/living-room.jpg)",
    backgroundPosition: "-130px 0px",
}} />

}