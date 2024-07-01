import { useEffect, useState } from 'preact/hooks'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Game } from './Game';





const Login = () => {
  const navigate = useNavigate();
 const [username, setUsername] = useState('')
const [password, setpassword] = useState('')
const [loggedIn, setLoggedIn] = useState(false);

  const users = [{id : 1, username : 'ronino' , password: 'rahmod13'},{id : 2, username : 'banana' , password: 'romana'},{id : 3, username : 'banana2' , password: 'romana'}]


  const  handleSubmit = (e) => {
    e.preventDefault();
     console.log(username, password)  
     const userFound = users.some((user) => user.username === username && user.password === password);

      if(userFound)
      {
        setLoggedIn(true);
        console.log('hello')
        navigate('/game');
      
    }
    else{
      setLoggedIn(false);
      console.log('9awad')
    }
    
  };
  useEffect(() => {
   
  
 /*    return () => {
      second
    } */
  }, [])
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login