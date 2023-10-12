import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Testimonials from './Testimonials'

const ViewTestimonials = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('username')) {
            navigate('/');
        }

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
                        <h1>Testimonials</h1>
                    </div>
                </div>
            </div>

            <Testimonials />
        </>
    )
}

export default ViewTestimonials
