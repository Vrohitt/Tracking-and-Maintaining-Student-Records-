import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
 
    let navigate=useNavigate();

    const {id}=useParams()

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

   useEffect(()=>{

    loadUser()
   }, []);


  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user);
    navigate("/");
    

  };

  const loadUser =async ()=>{

    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">

        <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Student</h2>

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
