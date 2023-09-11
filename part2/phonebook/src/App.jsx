/* eslint-disable react/prop-types */
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
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(searchKeyword.toLowerCase())
        )
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
      <Filter filterValue={searchKeyword} setFilterValue={setSearchKeyword} />
      <h2>add a new</h2>
      <PersonForm
        addPersonHandler={addPersonHandler}
        handleNewName={handleNewName}
        newName={newName}
        handleNewNumber={handleNewNumber}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Person persons={filteredPersons} />
    </div>
  );
};

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPersonHandler}>
      <div>
        name: <input onChange={props.handleNewName} value={props.newName} />
      </div>
      <div>
        number:{" "}
        <input onChange={props.handleNewNumber} value={props.newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Person = ({ persons }) => {
  return (
    <>
      {persons.map((person, i) => (
        <div key={i}>
          {person.name} {person.number}
        </div>
      ))}
    </>
  );
}

const Filter = ({ filterValue, setFilterValue }) => (
  <div>
    filter shown with{" "}
    <input
      onChange={(e) => setFilterValue(e.target.value)}
      value={filterValue}
    />
  </div>
);
export default App;
