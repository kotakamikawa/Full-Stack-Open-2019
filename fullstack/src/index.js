import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showName, setShowName ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter showName={showName} setShowName={setShowName}/>
      <h3>Add a new</h3>
      <PersonForm persons={persons} newNumber={newNumber} newName={newName}  setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons showName={showName} persons={persons}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)