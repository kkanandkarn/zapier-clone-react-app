import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar';

const Viewnavbar = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('/');
    }

  }, [])
  useEffect(() => {
    axios.get('http://localhost:5000/navbar')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>

      <div className="container-fluid mt-4 mb-4 border-bottom">
        <div className="row align-items-center">
          <div className="col-2">
            <Link to="/admin" className="btn btn-primary mb-2">
              Back
            </Link>
          </div>
          <div className="col-8 text-center">
            <h1>Nav Bar</h1>
          </div>
        </div>
      </div>

      <Navbar />

    </>
  )
}

export default Viewnavbar
