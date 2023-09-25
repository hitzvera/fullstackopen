/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import phonebookService from "./services/phonebook";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    phonebookService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const handleNameInputChange = (event) => {
    const inputValue = event.target.value;
    setNewName(inputValue);
  };

  const filteredPersons =
    searchKeyword !== ""
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      : persons;

  const handleNumberInputChange = (event) => {
    const inputValue = event.target.value;
    setNewNumber(inputValue);
  };

  /**
   * Compare two objects and check if they have the same properties and values (except "id").
   * @param {object} first - The first object to compare.
   * @param {object} second - The second object to compare.
   * @returns {boolean} - True if the objects are equal, false otherwise.
   */
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

          setIsError(false);
          setSuccessMessage(`${newName} has been added to phonebook`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setIsError(true);
          alert(`some error is happening, error: ${error.message} `);
        });
    }
  };

  const handleDeleteButton = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      phonebookService
        .deletePhonebook(id)
        .then((returendData) =>
          console.log(`sukses ${returendData.toString()}`)
        )
        .catch((err) => {
          setIsError(true);
          setSuccessMessage(err.message);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} isError={isError} />
      <Filter filterValue={searchKeyword} setFilterValue={setSearchKeyword} />
      <h2>add a new</h2>
      <PersonForm
        addPersonHandler={addPersonHandler}
        handleNewName={handleNameInputChange}
        newName={newName}
        handleNewNumber={handleNumberInputChange}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Person
        persons={filteredPersons}
        handleDeleteButton={handleDeleteButton}
      />
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

const Person = ({ persons, handleDeleteButton }) => {
  return (
    <>
      {persons.map((person, i) => (
        <div key={i}>
          {person.name} {person.number}{" "}
          <button onClick={() => handleDeleteButton(person.id, person.name)}>
            delete
          </button>
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
