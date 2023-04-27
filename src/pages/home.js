import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function Home() {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result);
    setUsers(result.data);
  };

  // Verify the Console


  return (
    <div classsName='container'>
        <div className="py-4">
            <table class="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
            </tbody>
            </table>
        </div>  
    </div>
  )
}
