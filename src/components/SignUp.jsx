import axios from 'axios'
import React, { useState } from 'react'



import { NavLink, useNavigate } from "react-router-dom";



const SingUp = () => {
    const navigate = useNavigate();
    const [user_name, setUser_name] = useState('')
    const [password, setPassword] = useState('')
   

    const handleSingUp = (e) => {
        e.preventDefault()
        if (user_name.length === 0 &&  password.length === 0) {
            return
        }
        const userData = {
            user_name: user_name,
          password: password

        }
        axios.post('http://localhost/APIs/postdata.php', userData)
            .then(res => {
                console.log(res.data)
                navigate("/SingIn");

            })
            .catch(error => {
                console.error('An error occurred while making the request:', error);
            });
    }
    return (
        <div className='text-center'> 
            <h1 style={{ color: 'white' }} className='m-4'>Welcome To Target Pointer</h1><p style={{ color: 'white' }}>Sing Up and get a free account</p>
            <form onSubmit={handleSingUp}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">UserName</label>
    <input type="text" value={user_name} onChange={(e) => setUser_name(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3 ">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control " id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
           
            <p className='mt-3' style={{ color: 'white' }}>Already have an account {' '}<NavLink to='/SingIN' ActiveClassName='a'><b>Login</b></NavLink></p>
        </div>
    )
}

export default SingUp