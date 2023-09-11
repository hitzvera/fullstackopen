/* eslint-disable react/jsx-key */
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const compareObject = (first, second) => {
    // getting all properties names
    const al = Object.getOwnPropertyNames(first);
    const bl = Object.getOwnPropertyNames(second);

    if (al.length !== bl.length) return false;

    // check if every al and bl have the same properties
    const hasAllKeys = al.every((value) => !!bl.find((v) => v === value));
    if (!hasAllKeys) return false;

    // checking for every value of properties
    for (const key of al) if (first[key] !== second[key]) return false;

    return true;
  };

  const addPersonHandler = (event) => {
    event.preventDefault();
    const newObject = {
      name: newName,
    };

    if (persons.some((person) => compareObject(person, newObject))) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, newObject]);
      setNewName("");
    }

  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersonHandler}>
        <div>
          name: <input onChange={handleNewName} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <div key={i}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
