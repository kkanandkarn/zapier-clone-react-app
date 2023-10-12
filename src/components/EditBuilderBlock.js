import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

const EditBuilderBlock = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        BuilderBlockImage: '',
    });

    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/BuilderBlock')
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
        axios.put('http://localhost:5000/BuilderBlock/1', formData)
            .then(res => {
                // Handle success, e.g., show a success message
                console.log('Data updated successfully:', res.data);
                Swal.fire({
                    title: 'Success',
                    text: "Data Updated Successfully",
                    icon: "success",
                });
                navigate('/admin')
            })
            .catch((err) => {
                // Handle error, e.g., show an error message
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
                        <h2 className="text-center">Edit Builder Block</h2>
                        <div className="mb-3">
                            <label htmlFor="BuilderBlockImage" className="form-label">Image URL</label>
                            <input type="text" className="form-control border-primary" id="BuilderBlockImage" value={formData.BuilderBlockImage} onChange={handleChange} />
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

export default EditBuilderBlock
