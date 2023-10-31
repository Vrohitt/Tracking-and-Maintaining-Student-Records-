import React, { useEffect, useState } from 'react'
import axios from"axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {


    const [users,setUsers]=useState([]);
    const {id}=useParams()

    useEffect(()=> {
        loadUsers();
    
}, []);

const loadUsers= async () => {
    const result=  await axios.get("http://localhost:8080/users");
    setUsers(result.data);
};

const deleteUser=async (id)=>{
  await axios.delete(`http://localhost:8080/user/${id}`)
  loadUsers()
}


  return (
    <div className='container'>
        <div className='py-4'>

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">SrNo.</th>
      <th scope="col">Student Name</th>
      <th scope="col">Class</th>
      <th scope="col">Father's Name</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {users.map((user, index) => (
        <tr>
            <th scope="row" key={index}>
                {index + 1}
            </th>
            <td>{user.name}</td>
            <td>{user.std}</td>
            <td>{user.fathersname}</td>
            <td>{user.address}</td>

            <td>
                <Link className="btn btn-outline-success mx-2"
                
                to={`/edituser/${user.id}`}
                >Edit</Link>
                <button className="btn btn-outline-danger mx-2"
                
                onClick={()=>deleteUser(user.id)}
                >Delete </button>
                <button className="btn btn-outline-success mx-2">View </button>
            </td>
        </tr>
    ))}      
    
  </tbody>
</table>
        </div>

    </div>
  );
}

