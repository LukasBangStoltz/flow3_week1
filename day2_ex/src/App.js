import logo from "./logo.svg";
import "./App.css";
import Count from "./Count.js";
import Jokes from "./Joke.js"
import MembersList from "./ListDemo.js"

function App() {
  return (
    <div className="App">
      <p>hej</p>
      
      <Count initCount={Number (localStorage.getItem("count"))} increments={5} decrements={5} />
      <Jokes/>
      <MembersList class = "test"/>
    </div>
  );
}

export default App;
