import React, { useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import './Input.css'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function Input() {
  const [user, setUser] = useReducer(formReducer, {});
  const handleSubmit = e => {
    e.preventDefault();
    console.log(user)
    fetch("http://174.138.103.233/api/employees", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => setUser(json.user))

  }

  const handleChange = event => {
    setUser({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <>
      <h2>Form</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" onChange={handleChange} type="text" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" onChange={handleChange} type="text" placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
          <Form.Control name="gender" onChange={handleChange} type="text" placeholder="Enter Gender" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Birthday</Form.Label>
          <Form.Control name="birthday" onChange={handleChange} type="date" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>About</Form.Label>
          <Form.Control name="about" onChange={handleChange} type="text" placeholder="About" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </>
  )
}


export default Input;