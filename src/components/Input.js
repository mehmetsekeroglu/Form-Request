import React, { useReducer } from 'react';
import "./Input.css"

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function Input() {
  const [user, setUser] = useReducer(formReducer, {});
  const handleSubmit = e => {
    e.preventDefault()
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

  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <span>First Name</span>
            <input name="firstName" onChange={handleChange}/>
          </label> <label>
            <span>Last Name</span>
            <input name="lastName" onChange={handleChange}/>
          </label> <label>
            <span>Gender</span>
            <input name="gender" onChange={handleChange}/>
          </label> <label>
            <span>Birthday</span>
            <input name="birthday" onChange={handleChange}/>
          </label> <label>
            <span>E-Mail</span>
            <input name="email" onChange={handleChange}/>
          </label>
          <label>
            <span>Password</span>
            <input name="password" onChange={handleChange}/>
          </label>
          <label>
            <span>About</span>
            <input name="about" onChange={handleChange}/>
          </label>
          
        </fieldset>
        <button type="submit">Submit</button>
      </form>
     
    </div>
  )
}


export default Input;