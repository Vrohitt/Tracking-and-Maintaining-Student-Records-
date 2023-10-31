import axios from "axios";
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
 
    let navigate=useNavigate()

  const [user,setUser]=useState({
    name:"",
    std:"",
    fathersname:"",
    address:"",
  });



  const{name,std,fathersname,address}=user

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value});

  };


  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
    navigate("/")
    

  };
  return (
    <div className="container">
      <div className="row">

        <div className="col-md-6 offset-md-0 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div ClassName="mb-3">

            <label htmlFor="Name" className="form-label">
              Student's Name
            </label>

            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div ClassName="mb-3">

            <label htmlFor="Name" className="form-label">
             Student's Class
            </label>

            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your class"
            name="std"
            value={std}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div ClassName="mb-3">

            <label htmlFor="Name" className="form-label">
              Student Father's Name
            </label>

            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your father's name"
            name="fathersname"
            value={fathersname}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div ClassName="mb-3">

            <label htmlFor="Name" className="form-label">
              Student's Address
            </label>

            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your address"
            name="address"
            value={address}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          
          <button type="submit" className="btn btn-outline-success my-4">
            Submit
          </button>
          <Link  className="btn btn-outline-danger my-4 mx-4" to="/" >
            Cancel
          </Link>
          </form>

          
        </div>
      </div>
    </div>
  )
}
