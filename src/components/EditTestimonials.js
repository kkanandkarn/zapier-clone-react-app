import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const EditTestimonials = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        TestimonialsTopHeading: '',
        TestimonialsBottomHeading: '',
        TestimonialsButtonText: '',
        TestimonialsUserImage: '',
        TestimonialsUser: '',
        TestimonialsUserName: '',
        TestimonialReview: '',
    });

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/Testimonials')
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
        axios.put('http://localhost:5000/Testimonials/1', formData)
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
                        <h2 className="text-center">Edit Testimonials</h2>
                        <div className="mb-3">
                            <label htmlFor="TestimonialsTopHeading" className="form-label">Top Heading</label>
                            <input type="text" className="form-control border-primary" id="TestimonialsTopHeading" value={formData.TestimonialsTopHeading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="TestimonialsBottomHeading" className="form-label">Bottom Heading</label>
                            <input type="text" className="form-control border-primary" id="TestimonialsBottomHeading" value={formData.TestimonialsBottomHeading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="TestimonialsButtonText" className="form-label">Button Text</label>
                            <input type="text" className="form-control border-primary" id="TestimonialsButtonText" value={formData.TestimonialsButtonText} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="TestimonialsUserImage" className="form-label">User ImageURL </label>
                            <input type="text" className="form-control border-primary" id="TestimonialsUserImage" value={formData.TestimonialsUserImage} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="TestimonialsUser" className="form-label">User</label>
                            <input type="text" className="form-control border-primary" id="TestimonialsUser" value={formData.TestimonialsUser} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="TestimonialsUserName" className="form-label">User Name</label>
                            <input type="text" className="form-control border-primary" id="TestimonialsUserName" value={formData.TestimonialsUserName} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="TestimonialReview" className="form-label">User Review</label>
                            <input type="text" className="form-control border-primary" id="TestimonialReview" value={formData.TestimonialReview} onChange={handleChange} />
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

export default EditTestimonials
