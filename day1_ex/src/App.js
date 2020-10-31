import upper, {text1,text2, text3} from "./file1";
import upper2 from "./file2"
import './App.css';
import {males, females} from "./file2"
import MultiWelcome from "./file3";
import React, { useState } from 'react';




let {firstName, email} = {...upper2}

let newArray = [...males, ...females]
console.log(newArray)

let newArray2 = [...males, "kurt", "helle", ...females, "tina"]
console.log(newArray2)
function App() {
  return (
    <div className="App">
     <h2>Ex 1</h2>
     <p>{upper("please suck me")}</p>
     <p>{upper(text1)}</p>
     <p>{upper(text2)}</p>
     <p>{upper(text3)}</p>

     <h2>Ex 2</h2>
     <p>{firstName}, {email}</p>


     <h2>Ex3</h2> <MultiWelcome/>
    
    
    </div>
  );
}

export default App;




/* lidt hygge 


function Example() {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
*/