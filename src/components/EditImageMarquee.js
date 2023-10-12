import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const EditImageMarquee = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        image7: '',
        image8: '',
        image9: '',
        image10: '',
        image11: '',
        image12: '',
    });

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/imagemarquee')
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
        axios.put('http://localhost:5000/imagemarquee/1', formData)
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
                        <h2 className="text-center">Edit Image Marquee</h2>
                        <div className="mb-3">
                            <label htmlFor="image1" className="form-label">Logo1 URL</label>
                            <input type="text" className="form-control border-primary" id="image1" value={formData.image1} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image2" className="form-label">Logo2 URL</label>
                            <input type="text" className="form-control border-primary" id="image2" value={formData.image2} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image3" className="form-label">Logo3 URL</label>
                            <input type="text" className="form-control border-primary" id="image3" value={formData.image3} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image4" className="form-label">Logo4 URL</label>
                            <input type="text" className="form-control border-primary" id="image4" value={formData.image4} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image5" className="form-label">Logo5 URL</label>
                            <input type="text" className="form-control border-primary" id="image5" value={formData.image5} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image6" className="form-label">Logo6 URL</label>
                            <input type="text" className="form-control border-primary" id="image6" value={formData.image6} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image7" className="form-label">Logo7 URL</label>
                            <input type="text" className="form-control border-primary" id="image7" value={formData.image7} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image8" className="form-label">Logo8 URL</label>
                            <input type="text" className="form-control border-primary" id="image8" value={formData.image8} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image9" className="form-label">Logo9 URL</label>
                            <input type="text" className="form-control border-primary" id="image9" value={formData.image9} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image10" className="form-label">Logo10 URL</label>
                            <input type="text" className="form-control border-primary" id="image10" value={formData.image10} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image11" className="form-label">Logo11 URL</label>
                            <input type="text" className="form-control border-primary" id="image11" value={formData.image11} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image10" className="form-label">Logo12 URL</label>
                            <input type="text" className="form-control border-primary" id="image10" value={formData.image12} onChange={handleChange} />
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

export default EditImageMarquee
