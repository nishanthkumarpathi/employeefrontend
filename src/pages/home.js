import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function Home() {

  const [users, setUsers] = useState([])


  useEffect(() => {
    console.log("Checking the Console Loading...")
  });

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
