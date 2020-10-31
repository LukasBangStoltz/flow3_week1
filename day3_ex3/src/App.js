import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import NameList from "./NameList.js"
import { useState } from 'react';
import NewName from "./NewName.js"
import { ToastBody } from 'react-bootstrap';



function App() {

  const initialData = [
    { id: uuid(), nameText: "Lukas" },
    { id: uuid(), nameText: "Sebastian" },
    { id: uuid(), nameText: "Christoffer" },
  ];

  const [names, setNames] = useState(initialData)
  const [newNames, setNewName] = useState({id: "", nameText: ""})


const addName = (name) =>{
  if (name.id === ""){
    name.id = uuid();
    names.push(name);
  }else{
    let nameToEdit = names.find((t => t.id === name.id))
    nameToEdit.nameText = name.nameText;
  }
  setNames([...names])
  setNewName({id: "", nameText: ""})
}


const deleteName = (name) => {
let newNames = names.filter((x)=> x.id !== name.id)
setNames(newNames)
}

const editName = (name) => {
  setNewName({id: name.id, nameText: name.nameText})
}


  return (
    <div className="container outer">
    <h2 style={{ textAlign: "center", marginBottom: 25 }}>
      Props and Lifting State Demo
    </h2>

    <div className="row">
      <div className="col-6 allNames">
        <NameList names={names} deleteName={deleteName} editName={editName}/>
      </div>
      <div className="col-5 new-name">
      <NewName addName = {addName} newName={newNames}/>
       
      </div>
    </div>
  </div>
  );
}

export default App;
