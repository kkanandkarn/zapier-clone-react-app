import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('/');
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('username')
    navigate('/')
  }

  return (
    <>
      <div className="position-absolute top-0 end-0 m-4">
        <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
      </div>

      <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>List of Components</h1>
        <div className="w-75 rounded bg-white border shadow p-4">
          <div className="d-flex justify-content-end">

          </div>

          <table className='table table-striped'>
            <thead>
              <tr>
                <td><strong>Components</strong></td>
                <td><strong>Action</strong></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alert</td>
                <td> <Link to="/viewalert" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/editalert" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>

              <tr>
                <td>Navbar</td>
                <td> <Link to="/viewnavbar" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/editnavbar" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>

              <tr>
                <td>Hero Section</td>
                <td> <Link to="/viewherosection" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/editherosection" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>

              <tr>
                <td>Image Marquee</td>
                <td> <Link to="/viewimagemarquee" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/editimagemarquee" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>

              <tr>
                <td>Cards</td>
                <td> <Link to="/viewcards" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/editcards" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>

              <tr>
                <td>Feature Section</td>
                <td> <Link to="/viewfeaturesection" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/editfeaturesection" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>

              <tr>
                <td>Simple Feature Section</td>
                <td> <Link to="/viewsimplefeaturesection" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/editsimplefeaturesection" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>

              <tr>
                <td>Testimonials</td>
                <td> <Link to="/viewtestimonials" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/edittestimonials" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>
              <tr>
                <td>Builderblock</td>
                <td> <Link to="/viewbuilderblock" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/editbuilderblock" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>
              <tr>
                <td>Footer</td>
                <td> <Link to="/viewfooter" className='btn btn-sm btn-info me-2'>View</Link></td>
                <td><Link to="/editfooter" className='btn btn-sm btn-primary me-2'>Edit</Link></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>




    </>
  )
}

export default Admin
