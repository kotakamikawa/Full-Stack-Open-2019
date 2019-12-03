import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.text + props.value}</div>

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const Statistics = (props) => {
  return(
    <div>
      <Display text='good' value ={props.good} />
      <Display text='neutral' value ={props.neutral} />
      <Display text='bad' value ={props.bad} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="thousand" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="reset" />
      <Button handleClick={() => setBad(bad + 1)} text="increment" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)