import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';


const Editherosection = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        heroSectionHeader: '',
        heroSectionHeaderParagraph: '',
        heroSectionButton1: '',
        heroSectionButton2: '',
        heroSectionMarker1B: '',
        heroSectionMarker1P: '',
        heroSectionMarker2B: '',
        heroSectionMarker2P: '',
        heroSectionVideo: '',
    });

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/herosection')
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
        axios.put('http://localhost:5000/herosection/1', formData)
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
                        <h2 className="text-center">Edit Hero Section</h2>
                        <div className="mb-3">
                            <label htmlFor="heroSectionHeader" className="form-label">Top Header</label>
                            <input type="text" className="form-control border-primary" id="heroSectionHeader" value={formData.heroSectionHeader} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heroSectionHeaderParagraph" className="form-label">Header Paragraph</label>
                            <input type="text" className="form-control border-primary" id="heroSectionHeaderParagraph" value={formData.heroSectionHeaderParagraph} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heroSectionButton1" className="form-label">Button1 Text</label>
                            <input type="text" className="form-control border-primary" id="heroSectionButton1" value={formData.heroSectionButton1} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heroSectionButton2" className="form-label">Button2 Text</label>
                            <input type="text" className="form-control border-primary" id="heroSectionButton2" value={formData.heroSectionButton2} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heroSectionMarker1B" className="form-label">Marker1 Bold Text</label>
                            <input type="text" className="form-control border-primary" id="heroSectionMarker1B" value={formData.heroSectionMarker1B} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heroSectionMarker1P" className="form-label">Marker1 Text</label>
                            <input type="text" className="form-control border-primary" id="heroSectionMarker1P" value={formData.heroSectionMarker1P} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heroSectionMarker2B" className="form-label">Marker2 Bold Text</label>
                            <input type="text" className="form-control border-primary" id="heroSectionMarker2B" value={formData.heroSectionMarker2B} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heroSectionMarker2P" className="form-label">Marker2 Text</label>
                            <input type="text" className="form-control border-primary" id="heroSectionMarker2P" value={formData.heroSectionMarker2P} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="heroSectionVideo" className="form-label">Video URL (.mp4")</label>
                            <input type="text" className="form-control border-primary" id="heroSectionVideo" value={formData.heroSectionVideo} onChange={handleChange} />
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

export default Editherosection
