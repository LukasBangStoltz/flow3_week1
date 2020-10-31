import { useState, useEffect } from "react";
const URL =  "https://icanhazdadjoke.com/"



function Jokes(props){
    const [joke, setJoke] = useState('');

    function getJoke() {
        fetch(URL, { headers: { 'Accept': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                setJoke(data.joke)
            })
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
          getJoke()
        }, 10000);
        return () => clearInterval(interval);
      }, [joke]);

    return(
        <div>
            <button onClick={(getJoke)}> hent joke </button>
            <p>{joke}</p>
        </div>
    )
}

export default Jokes