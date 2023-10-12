import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Alert from './Alert';

const Viewalert = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }

    }, [])
    useEffect(() => {
        axios.get('http://localhost:5000/alert')
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
                        <h1>Top Alert</h1>
                    </div>
                </div>
            </div>


            <Alert />

        </>
    )
}

export default Viewalert
