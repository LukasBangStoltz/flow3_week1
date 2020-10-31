import { persons } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />

      {persons.map((person, index) => (
        <WelcomePerson person={person} key={index} />
      ))}
    </div>
  );
}

function WelcomePerson(props) {
  return (
    <p>
      {" "}
      {props.person.firstName}, {props.person.lastName}, {props.person.email}{" "}
    </p>
  );
}

export default MultiWelcome;
