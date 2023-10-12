import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const Editalert = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    alertText: '',
    alertTextLink: '',
  });

  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/alert')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Set the formData state with the data from the API response
    if (data.length > 0) {
      setFormData(data[0]);
    }
  }, [data]);

  const handleChange = (e) => {
    // Update the formData state when the user types in an input field
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the data in the backend
    axios.put('http://localhost:5000/alert/1', formData)
      .then(res => {
        // Handle success
        console.log('Data updated successfully:', res.data);
        Swal.fire({
          title: 'Success',
          text: "Data Updated Successfully",
          icon: "success",
        });
        navigate('/admin')
      })
      .catch((err) => {
        // Handle error
        console.error('Error updating data:', err);
      });
  };


  return (
    <>
      <div className="position-absolute top-0 left-0 m-4 my-3">
        <Link to="/admin" className="btn btn-primary">
          Back
        </Link>
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100">

        <form className="border border-primary rounded p-4 shadow" style={{ width: '500px' }} onSubmit={handleSubmit}>

          <div className="form-container">
            <h2 className="text-center">Edit Alert</h2>
            <div className="mb-3">
              <label htmlFor="alertText" className="form-label">Alert Text</label>
              <input type="text" className="form-control border-primary" value={formData.alertText} id="alertText" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="alerttextlink" className="form-label">Alert Text Link</label>
              <input type="text" className="form-control border-primary" id="alertTextLink" value={formData.alertTextLink} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </form>

      </div>


    </>
  )
}

export default Editalert
