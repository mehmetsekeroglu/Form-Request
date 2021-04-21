import React, { useEffect, useState } from 'react';
//import "./List.css"

function List() {
  const [users, setUsers] = useState([])

useEffect(() => {
    loadUsers()
}, []);
  
    const loadUsers = async () =>{
        const response = await fetch('http://174.138.103.233/api/employees');
        const data = await response.json();
        setUsers(data)
      }
 return(
     <>
    <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>Birthday</th>
      <th>E-Mail</th>
      <th>Password</th>
      <th>About</th>
    </tr>
    {users.map(user=>{
        return(
  <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.gender}</td>
      <td>{user.birthday}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td>{user.about}</td>
    </tr>
        )
    })}
  </table>
  </>
 )   
}


export default List;