import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function NewName(props) {
  const [name, setName] = useState(props.newName);

  const saveName = (evt) => {
    if (name.nameText === "") {
      return;
    }
    props.addName(name);
    evt.preventDefault();
  };

  useEffect(() => setName({ ...props.newName }), [props.newName]);

  const onChange = (evt) => {
    const value = evt.target.value;
    name.nameText = value;
    setName({ ...name });
  };
  const title = name.id === "" ? "Create new Name" : "Edit Name";

  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={name.nameText} onChange={onChange} />
        <br />
        <br />
        <button onClick={saveName} className="btn btn-info">
          Save
        </button>
      </form>
      {name.id !== "" && <p>Editing</p>}
    </div>
  );
}

export default NewName;

NewName.propTypes ={
    newName: PropTypes.object,
    addName: PropTypes.func
}
