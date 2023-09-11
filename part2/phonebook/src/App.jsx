/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

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
    // Getting all property names
    const al = Object.getOwnPropertyNames(first);
    const bl = Object.getOwnPropertyNames(second);

    // Remove "id" property from the property names arrays
    const filteredAl = al.filter((prop) => prop !== "id");
    const filteredBl = bl.filter((prop) => prop !== "id");

    if (filteredAl.length !== filteredBl.length) return false;

    // Check if every filteredAl and filteredBl have the same properties
    const hasAllKeys = filteredAl.every((value) => filteredBl.includes(value));
    if (!hasAllKeys) return false;

    // Checking for every value of properties (except "id")
    for (const key of filteredAl) {
      if (first[key] !== second[key]) {
        return false;
      }
    }

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
      phonebookService
        .addPhoneBook(newObject)
        .then((returendData) => {
          setPersons([...persons, returendData]);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          alert(`some error is happening, error: ${error.message} `);
        });
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
};

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
