import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Featuresection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/Featuresection')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='feature-section'>
            {data.map((d, i) => (
                <div className="feature-section-columns" key={i}>
                    <div className="feature-section-column1">
                        <h2>{d.featureMasterHeading}</h2>
                    </div>
                    <div className="feature-section-column2">
                        <div className="feature-section-column2-row1">
                            <h2>{d.featureTopHeading}</h2>
                            <div className="right-card-paragraph feature-right-heading">
                                <p>{d.featureTopParagraph}</p>
                            </div>
                            <div className="right-card-links">
                                <div className="right-card-link"><a className='explore-link' href='/'>{d.featureTopLinkText}</a></div>
                                <div className="right-card-arrow">
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="css-1pf81q0-ArrowLink__icon"><path d="M16.86 11H4v2h12.86l-5.04 6h2.62l5.86-7-5.86-7h-2.62l5.04 6z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className="feature-section-column2-row2">
                            <h2>{d.featureBottomHeading}</h2>
                            <div className="right-card-paragraph">
                                <p style={{ textAlign: 'left', fontSize: "20px" }}>{d.featureBottomParagraph}</p>
                            </div>
                            <div className="right-card-links">
                                <div className="right-card-link"><a className='explore-link' href='/'>{d.featureBottomLinkText}</a></div>
                                <div className="right-card-arrow">
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="css-1pf81q0-ArrowLink__icon"><path d="M16.86 11H4v2h12.86l-5.04 6h2.62l5.86-7-5.86-7h-2.62l5.04 6z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }


        </div>
    )
}

export default Featuresection
