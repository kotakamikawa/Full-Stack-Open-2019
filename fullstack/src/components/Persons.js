import React, { useState } from 'react'

const Persons = (props) =>{
  const {showName, persons} = props
  const filteredPersons = showName ? persons.filter(person => person.name.toUpperCase().includes(showName.toUpperCase()) || person.number.includes(showName)) : persons
  return filteredPersons.map(person => <div key={person.name}>{person.name} {person.number}</div>)
}

export default Persons