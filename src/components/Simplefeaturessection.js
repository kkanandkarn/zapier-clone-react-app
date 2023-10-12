import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Simplefeaturessection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/SimpleFeaturesection')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {data.map((d, i) => (
                <div className='simple-feature-section' key={i}>
                    <h2 className='simple-feature-section-heading'>{d.SimpleFeaturesectionMasterHeading}</h2>
                    <div className="simple-feature-section-cards">
                        <div className="simple-feature-section-card">
                            <div className="simple-feature-section-card-heading"><h2>{d.SimpleFeaturesectionLeftHeading}</h2></div>
                            <div className="simple-feature-section-card-paragraph">
                                <p>{d.SimpleFeaturesectionLeftParagraph}</p>
                            </div>
                            <div className="right-card-links simple-right-card">
                                <div className="right-card-link"><a className='explore-link' href='/'>{d.SimpleFeaturesectionLeftLinkText}</a></div>
                                <div className="right-card-arrow">
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="css-1pf81q0-ArrowLink__icon"><path d="M16.86 11H4v2h12.86l-5.04 6h2.62l5.86-7-5.86-7h-2.62l5.04 6z"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="simple-feature-section-card">
                            <div className="simple-feature-section-card-heading"><h2>{d.SimpleFeaturesectionMiddleHeading}</h2></div>

                            <div className="simple-feature-section-card-paragraph">
                                <p>{d.SimpleFeaturesectionMiddleParagraph}</p>
                            </div>
                            <div className="right-card-links simple-right-card">
                                <div className="right-card-link"><a className='explore-link' href='/'>{d.SimpleFeaturesectionMiddleLinkText}</a></div>
                                <div className="right-card-arrow">
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="css-1pf81q0-ArrowLink__icon"><path d="M16.86 11H4v2h12.86l-5.04 6h2.62l5.86-7-5.86-7h-2.62l5.04 6z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className="simple-feature-section-card">
                            <div className="simple-feature-section-card-heading">
                                <h2>{d.SimpleFeaturesectionRightHeading}</h2>
                            </div>

                            <div className="simple-feature-section-card-paragraph">
                                <p>{d.SimpleFeaturesectionRightParagraph}</p>
                            </div>
                            <div className="right-card-links simple-right-card">
                                <div className="right-card-link"><a className='explore-link' href='/'>{d.SimpleFeaturesectionRightLinkText}</a></div>
                                <div className="right-card-arrow">
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="css-1pf81q0-ArrowLink__icon"><path d="M16.86 11H4v2h12.86l-5.04 6h2.62l5.86-7-5.86-7h-2.62l5.04 6z"></path></svg>
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

export default Simplefeaturessection
