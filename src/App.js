import React from 'react'

const Hello = (props) => {
  return (
    <div><p>Hello {props.name}, it is {props.now}!</p></div>
  )
};

const App = () => {
  let x = 2;
  return (
    <div><h1>Greetings</h1>
      <Hello name='Paul' now={new Date().toString()} />
      <Hello name='Daisy' now={new Date().toString()} />
      <Hello name='Jim' now={new Date().toString()} />
    </div>
  )
};

export default App;