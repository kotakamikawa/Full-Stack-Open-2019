import React, { useState } from 'react'

const PersonForm = (props) =>{
  
  const{ newName, newNumber ,persons, setNewName, setNewNumber, setPersons } = props

  const addPerson = (event) => {
    event.preventDefault()
    const foundPerson = persons.find(person => person.name === newName)
    if(foundPerson){
      alert(`${foundPerson.name} is already added to phonebook`)
    }
    const nameObject = { name : newName, number: newNumber}
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  return(
    <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

export default PersonForm