import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
}
const Part = (props) => {
    return (
        <p>
        {props.part.name} {props.part.exercises}
        </p>
    )
}
const Total = (props) => {
    return (
          <p>Number of exercises {props.parts.reduce((sum, part) =>  sum + part.exercises , 0)}</p>
    )
}
const Content = (props) => {
    return (
      <div>
        {props.parts.map( part  => <Part part={part}/>)}
      </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
        ]
    }
    const {name, parts} = course
    return (
        <div>
        <Header key='header' course={name} />
        <Content key='Content' parts={parts} />
        <Total key='Total' parts={parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
