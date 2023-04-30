import React from 'react'
import { useState } from 'react'

export default function AddUser() {

    // useState Hook for User
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    });

    // Object Destructuring
    const { name, username, email } = user;


  return (
    <div className='Container'>
        <div className='row'>
            {/* Bootstrap Grid System */}
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter your Name" value={name}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName</label>
                    <input type="text" className="form-control" name="username" placeholder="Enter your User Name" value={username
                    }/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" placeholder="Enter your Email" value={email
                    }/>
                </div>

                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <button type="submit" className="btn btn-outline-danger mx-2">Cancel</button>

            </div>

        </div>
                
    </div>
  )
}
