import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const EditFeatureSection = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        featureMasterHeading: '',
        featureTopHeading: '',
        featureTopParagraph: '',
        featureTopLinkText: '',
        featureBottomHeading: '',
        featureBottomParagraph: '',
        featureBottomLinkText: '',
    });

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/Featuresection')
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
        axios.put('http://localhost:5000/Featuresection/1', formData)
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
                        <h2 className="text-center">Edit Feature Section</h2>
                        <div className="mb-3">
                            <label htmlFor="featureMasterHeading" className="form-label">Master Heading</label>
                            <input type="text" className="form-control border-primary" id="featureMasterHeading" value={formData.featureMasterHeading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="featureTopHeading" className="form-label">Top Heading</label>
                            <input type="text" className="form-control border-primary" id="featureTopHeading" value={formData.featureTopHeading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="featureTopParagraph" className="form-label">Top Paragraph</label>
                            <input type="text" className="form-control border-primary" id="featureTopParagraph" value={formData.featureTopParagraph} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="featureTopLinkText" className="form-label">Top Link Text</label>
                            <input type="text" className="form-control border-primary" id="featureTopLinkText" value={formData.featureTopLinkText} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="featureBottomHeading" className="form-label">Bottom Heading</label>
                            <input type="text" className="form-control border-primary" id="featureBottomHeading" value={formData.featureBottomHeading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="featureBottomParagraph" className="form-label">Bottom Paragraph</label>
                            <input type="text" className="form-control border-primary" id="featureBottomParagraph" value={formData.featureBottomParagraph} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="featureBottomLinkText" className="form-label">Bottom Link Text</label>
                            <input type="text" className="form-control border-primary" id="featureBottomLinkText" value={formData.featureBottomLinkText} onChange={handleChange} />
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

export default EditFeatureSection
