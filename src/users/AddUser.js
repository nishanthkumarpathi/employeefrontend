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
            </div>
        </div>
                
    </div>
  )
}
