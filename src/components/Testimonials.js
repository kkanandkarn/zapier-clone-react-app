import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Testimonials = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/Testimonials')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {data.map((d, i) => (
                <div className='testimonial-section'>
                    <div className="testimonial-section-header">
                        <h2>{d.TestimonialsTopHeading}</h2>
                        <h2>{d.TestimonialsBottomHeading}</h2>
                        <div className="testimonial-section-button">
                            <a href="/">{d.TestimonialsButtonText}</a>
                        </div>
                    </div>


                    <div className="testimonial-container-columns">

                        <div className="testimonial-container-column1">
                            <div className="testimonial-container">
                                <div className="testimonial-image">
                                    <img src={d.TestimonialsUserImage} alt="Testimonial Image" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{d.TestimonialsUser}</div>
                                    <div className="testimonial-username">{d.TestimonialsUserName}</div>
                                </div>
                                <div className="testimonial-feedback">
                                    <p>{d.TestimonialReview}</p>
                                </div>
                            </div>

                            <div className="testimonial-container">
                                <div className="testimonial-image">
                                    <img src={d.TestimonialsUserImage} alt="Testimonial Image" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{d.TestimonialsUser}</div>
                                    <div className="testimonial-username">{d.TestimonialsUserName}</div>
                                </div>
                                <div className="testimonial-feedback">
                                    <p>{d.TestimonialReview}</p>
                                </div>
                            </div>
                        </div>



                        <div className="testimonial-container-column2">
                            <div className="testimonial-container">
                                <div className="testimonial-image">
                                    <img src={d.TestimonialsUserImage} alt="Testimonial Image" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{d.TestimonialsUser}</div>
                                    <div className="testimonial-username">{d.TestimonialsUserName}</div>
                                </div>
                                <div className="testimonial-feedback">
                                    <p>{d.TestimonialReview}</p>
                                </div>
                            </div>
                            <div className="testimonial-container">
                                <div className="testimonial-image">
                                    <img src={d.TestimonialsUserImage} alt="Testimonial Image" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{d.TestimonialsUser}</div>
                                    <div className="testimonial-username">{d.TestimonialsUserName}</div>
                                </div>
                                <div className="testimonial-feedback">
                                    <p>{d.TestimonialReview}</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-container-column1">
                            <div className="testimonial-container">
                                <div className="testimonial-image">
                                    <img src={d.TestimonialsUserImage} alt="Testimonial Image" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{d.TestimonialsUser}</div>
                                    <div className="testimonial-username">{d.TestimonialsUserName}</div>
                                </div>
                                <div className="testimonial-feedback">
                                    <p>{d.TestimonialReview}</p>
                                </div>
                            </div>
                            <div className="testimonial-container">
                                <div className="testimonial-image">
                                    <img src={d.TestimonialsUserImage} alt="Testimonial Image" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{d.TestimonialsUser}</div>
                                    <div className="testimonial-username">{d.TestimonialsUserName}</div>
                                </div>
                                <div className="testimonial-feedback">
                                    <p>{d.TestimonialReview}</p>
                                </div>
                            </div>
                        </div>



                        <div className="testimonial-container-column2">
                            <div className="testimonial-container">
                                <div className="testimonial-image">
                                    <img src={d.TestimonialsUserImage} alt="Testimonial Image" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{d.TestimonialsUser}</div>
                                    <div className="testimonial-username">{d.TestimonialsUserName}</div>
                                </div>
                                <div className="testimonial-feedback">
                                    <p>{d.TestimonialReview}</p>
                                </div>
                            </div>
                            <div className="testimonial-container">
                                <div className="testimonial-image">
                                    <img src={d.TestimonialsUserImage} alt="Testimonial Image" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{d.TestimonialsUser}</div>
                                    <div className="testimonial-username">{d.TestimonialsUserName}</div>
                                </div>
                                <div className="testimonial-feedback">
                                    <p>{d.TestimonialReview}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            ))
            }


        </>
    )
}

export default Testimonials
