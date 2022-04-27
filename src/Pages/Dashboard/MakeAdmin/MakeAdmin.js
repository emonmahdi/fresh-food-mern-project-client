import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Components/hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false)
  const {token} = useAuth()

  const handleOnBlur =(e) => {
      setEmail(e.target.value);
  }

  const handleAdminSubmit = (e) => {
    const user = {email}
    fetch('https://limitless-shore-74822.herokuapp.com/users/admin', {
        method: 'PUT',
        headers: {
            'authorization': `Bearer ${token}`,
            'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
        
    })
    .then(res => res.json())
    .then(data => { 
        if(data.modifiedCount){
            console.log(data)
            setEmail('')
            setSuccess(true)
        }
    })
    e.preventDefault();
  };

  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit} className='my-5 bg-light p-3'>
      {success &&  <p className="bg-success text-light p-2 mt-2">Make Admin successfully</p> }
        <TextField
          type="email"
          label="Email"
          onBlur={handleOnBlur}
          id="standard-basic"
          variant="standard"
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
        
      </form>
    </div>
  );
};

export default MakeAdmin;
