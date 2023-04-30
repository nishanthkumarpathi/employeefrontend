import React from 'react'

export default function AddUser() {
  return (
    <div className='Container'>
        <div className='row'>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your Name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your User Name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your Email" />
                </div>

                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <button type="submit" className="btn btn-outline-danger mx-2">Cancel</button>

            </div>

        </div>
                
    </div>
  )
}
