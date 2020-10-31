import React from "react";
import PropTypes from "prop-types";

const NameList = (props) => {
  

  return (
    <table align="center">
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {props.names.map((name) => (
          <tr key={name.id}>
            <td>
              {name.nameText}
              <button onClick={() => props.deleteName(name)}>Delete</button>
              <button onClick={() => props.editName(name)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NameList;

NameList.prototype = {
    todos: PropTypes.array,
};
