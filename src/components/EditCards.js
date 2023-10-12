import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const EditCards = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        card1Image: '',
        card1Heading: '',
        card1Paragraph: '',
        card1LinkText: '',
        card2Image: '',
        card2Heading: '',
        card2Paragraph: '',
        card2LinkText: '',
        card3Image: '',
        card3Heading: '',
        card3Paragraph: '',
        card3LinkText: '',
    });

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/cards')
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
        axios.put('http://localhost:5000/cards/1', formData)
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
                        <h2 className="text-center">Edit Cards</h2>
                        <div className="mb-3">
                            <label htmlFor="card1Image" className="form-label">Card1 Image</label>
                            <input type="text" className="form-control border-primary" id="card1Image" value={formData.card1Image} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card1Heading" className="form-label">Card1 Heading</label>
                            <input type="text" className="form-control border-primary" id="card1Heading" value={formData.card1Heading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card1Paragraph" className="form-label">Card1 Paragraph</label>
                            <input type="text" className="form-control border-primary" id="heroSectionButton1" value={formData.card1Paragraph} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card1LinkText" className="form-label">Card1 Link Text</label>
                            <input type="text" className="form-control border-primary" id="card1LinkText" value={formData.card1LinkText} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card2Image" className="form-label">Card 2 Image</label>
                            <input type="text" className="form-control border-primary" id="card2Image" value={formData.card2Image} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card2Heading" className="form-label">Card2 Heading</label>
                            <input type="text" className="form-control border-primary" id="card2Heading" value={formData.card2Heading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card2Paragraph" className="form-label">Card2 Paragraph</label>
                            <input type="text" className="form-control border-primary" id="card2Paragraph" value={formData.card2Paragraph} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card2LinkText" className="form-label">card2 Link Text</label>
                            <input type="text" className="form-control border-primary" id="card2LinkText" value={formData.card2LinkText} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card3Image" className="form-label">card3 Image</label>
                            <input type="text" className="form-control border-primary" id="card3Image" value={formData.card3Image} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card3Heading" className="form-label">Card3 Heading</label>
                            <input type="text" className="form-control border-primary" id="card3Heading" value={formData.card3Heading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card3Paragraph" className="form-label">Card3 Paragraph</label>
                            <input type="text" className="form-control border-primary" id="card3Paragraph" value={formData.card3Paragraph} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="card3LinkText" className="form-label">card3 Link Text</label>
                            <input type="text" className="form-control border-primary" id="card3LinkText" value={formData.card3LinkText} onChange={handleChange} />
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

export default EditCards
