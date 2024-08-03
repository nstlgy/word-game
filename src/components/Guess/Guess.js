import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

// generates boxes for letters

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <div>
      <p className="guess">
        {range(5).map((num) => (
          <span key={num} className="cell">
            {value ? value[num] : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
