import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';


const Editnavbar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    logo: '',
    navlink1: '',
    navlink2: '',
    navlink3: '',
    navlink4: '',
    navlink5: '',
    button1Text: '',
    buttonText: '',
  });

  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('/');
    }
  }, []);
  useEffect(() => {
    axios.get('http://localhost:5000/navbar')
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
    axios.put('http://localhost:5000/navbar/1', formData)
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
            <h2 className="text-center">Edit Navabar</h2>
            <div className="mb-3">
              <label htmlFor="logo" className="form-label">Logo</label>
              <input type="text" className="form-control border-primary" value={formData.logo} id="logo" onChange={handleChange} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="navlink1" className="form-label">Nav Link 1</label>
              <input type="text" className="form-control border-primary" id="navlink1" value={formData.navlink1} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="navlink2" className="form-label">Nav Link 2</label>
              <input type="text" className="form-control border-primary" id="navlink2" value={formData.navlink2} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="navlink3" className="form-label">Nav Link 3</label>
              <input type="text" className="form-control border-primary" id="navlink3" value={formData.navlink3} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="navlink4" className="form-label">Nav Link 4</label>
              <input type="text" className="form-control border-primary" id="navlink4" value={formData.navlink4} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="navlink5" className="form-label">Nav Link 5</label>
              <input type="text" className="form-control border-primary" id="navlink5" value={formData.navlink5} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="navlink5" className="form-label">Login Button Text</label>
              <input type="text" className="form-control border-primary" id="navlink5" value={formData.button1Text} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="navlink5" className="form-label">Sign Up Button Text</label>
              <input type="text" className="form-control border-primary" id="navlink5" value={formData.button2Text} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </form>

      </div>
    </>
  );
};

export default Editnavbar;

