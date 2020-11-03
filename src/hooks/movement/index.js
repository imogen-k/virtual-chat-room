import {useState} from "react"

export default function Movement(maxSteps) {
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState(0);
    const [position, setPos] = useState({ x:0, y:0 });
    const directions = {
        down: 0, 
        left: 1,
        right: 2,
        up: 3,
      };

      const stepSize = 16;

      const modifier = {
          down: { x: 0, y: stepSize },
          left: { x: -stepSize, y: 0 },
          right: { x: stepSize, y: 0 },
          up: { x: 0, y: -stepSize }

      }

      function move(dir) {
          if (!directions.hasOwnProperty(dir)) return;

          setDir(previous => {
              if(directions[dir] === previous) moving(dir)
              return directions[dir];
          } );
          setStep((previous) => (previous < maxSteps - 1 ? previous + 1 : 0));
      }

      function moving(dir) {
        setPos((previous) => ({
            x: previous.x + modifier[dir].x,
            y: previous.y + modifier[dir].y,

        })

        )
      }

      return {
          move, dir, step, position
      };
}