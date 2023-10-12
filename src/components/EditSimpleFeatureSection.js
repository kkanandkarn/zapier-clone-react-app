import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const EditSimpleFeatureSection = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        SimpleFeaturesectionMasterHeading: '',
        SimpleFeaturesectionLeftHeading: '',
        SimpleFeaturesectionLeftParagraph: '',
        SimpleFeaturesectionLeftLinkText: '',
        SimpleFeaturesectionMiddleHeading: '',
        SimpleFeaturesectionMiddleParagraph: '',
        SimpleFeaturesectionMiddleLinkText: '',
        SimpleFeaturesectionRightHeading: '',
        SimpleFeaturesectionRightParagraph: '',
        SimpleFeaturesectionRightLinkText: '',
    });

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/SimpleFeaturesection')
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
        axios.put('http://localhost:5000/SimpleFeaturesection/1', formData)
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
                        <h2 className="text-center">Edit Simple Feature Section</h2>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionMasterHeading" className="form-label">Master Heading</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionMasterHeading" value={formData.SimpleFeaturesectionMasterHeading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionLeftHeading" className="form-label">Left Heading</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionLeftHeading" value={formData.SimpleFeaturesectionLeftHeading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionLeftParagraph" className="form-label">Left Paragraph</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionLeftParagraph" value={formData.SimpleFeaturesectionLeftParagraph} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionLeftLinkText" className="form-label">Left Link Text</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionLeftLinkText" value={formData.SimpleFeaturesectionLeftLinkText} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionMiddleHeading" className="form-label">Middle Heading</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionMiddleHeading" value={formData.SimpleFeaturesectionMiddleHeading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionMiddleParagraph" className="form-label">Middle Paragraph</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionMiddleParagraph" value={formData.SimpleFeaturesectionMiddleParagraph} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionMiddleLinkText" className="form-label">Middle Link Text</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionMiddleLinkText" value={formData.SimpleFeaturesectionMiddleLinkText} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionRightHeading" className="form-label">Right Heading</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionRightHeading" value={formData.SimpleFeaturesectionRightHeading} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionRightParagraph" className="form-label">Right Paragraph</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionRightParagraph" value={formData.SimpleFeaturesectionRightParagraph} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="SimpleFeaturesectionRightLinkText" className="form-label">Right Link Text</label>
                            <input type="text" className="form-control border-primary" id="SimpleFeaturesectionRightLinkText" value={formData.SimpleFeaturesectionRightLinkText} onChange={handleChange} />
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

export default EditSimpleFeatureSection
