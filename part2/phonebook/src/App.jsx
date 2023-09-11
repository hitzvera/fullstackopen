/* eslint-disable react/jsx-key */
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const filteredPersons =
    searchKeyword !== ""
      ? persons.filter((person) => person.name.includes(searchKeyword))
      : persons;

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
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
      number: newNumber,
    };

    if (persons.some((person) => compareObject(person, newObject))) {
      // down side is when the number is same this alert still will be displayed
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, newObject]);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={(e)=>setSearchKeyword(e.target.value)}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPersonHandler}>
        <div>
          name: <input onChange={handleNewName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person, i) => (
        <div key={i}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
