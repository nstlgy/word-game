import React from "react";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // State used to manage elements in the array
  const [guesses, setGuesses] = React.useState([]);

  // This function takes guess from GuessInput Component
  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
