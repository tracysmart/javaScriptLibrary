import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const WorkoutCreate = (props) => {
  const [description, setDescription] = useState('');
  const [definition, setDefinition] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => { //1
    e.preventDefault();
    fetch('http://localhost:3000/log/log/', { //3
      method: 'POST', 
      body: JSON.stringify({log: {description: description, definition: definition, result: result}}), //4
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token //5
      })
    }) .then((res) => res.json())
    .then((logData) => { //6
      console.log(logData);
      setDescription(''); //7
      setDefinition('');  //7
      setResult('') //7
      props.fetchWorkouts(); //8
    })
  }

  return(
    <>
      <h3>Log a Workout</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="description"/>
          <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="definition"/>
          <Input type="select" name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)}>
            <option value="Time">Time</option>
            <option value="Weight">Weight</option>
            <option value="Distance">Distance</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="result"/>
          <Input name="result" value={result} onChange={(e) => setResult(e.target.value)}/>
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  )
}

export default WorkoutCreate;
