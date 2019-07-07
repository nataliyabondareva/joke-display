import React from 'react';
import { statement } from '@babel/template';

function JokeDisplay(props) {
console.log('props are', props)
  return (
    <div className="JokeDisplay">
    <p> 
      {props.joke.setup} <br></br>
      {props.joke.punchline}
    </p>
    </div>

  );
}

export default JokeDisplay;
