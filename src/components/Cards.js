import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Cards = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/cards')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {data.map((d, i) => (
                <div className='card-section' key={i}>
                    {/* 1st card */}
                    <div className='cards'>
                        <div className="card">
                            <div className="left-card">
                                <img
                                    className="left-card-img"
                                    alt="Connect apps like ChatGPT, Slack, and Google Sheets to build custom workflows"
                                    aria-hidden="false"
                                    data-testid="img"
                                    loading="lazy"
                                    src={d.card1Image}
                                    style={{
                                        width: '100%',
                                        borderRadius: '5px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                            <div className="right-card">
                                <h2>{d.card1Heading}</h2>
                                <div className="right-card-paragraph">
                                    <p> {d.card1Paragraph} </p>
                                </div>
                                <div className="right-card-links">
                                    <div className="right-card-link"><a className='explore-link' href='/'>{d.card1LinkText}</a></div>
                                    <div className="right-card-arrow">
                                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="css-1pf81q0-ArrowLink__icon"><path d="M16.86 11H4v2h12.86l-5.04 6h2.62l5.86-7-5.86-7h-2.62l5.04 6z"></path></svg>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    {/* 2nd card  */}

                    <div className='cards'>
                        <div className="card">
                            <div className="left-card">
                                <img
                                    className="left-card-img"
                                    alt="Connect apps like ChatGPT, Slack, and Google Sheets to build custom workflows"
                                    aria-hidden="false"
                                    data-testid="img"
                                    loading="lazy"
                                    src={d.card2Image}
                                    style={{
                                        width: '100%',
                                        borderRadius: '5px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                            <div className="right-card">
                                <h2>{d.card2Heading}</h2>
                                <div className="right-card-paragraph">
                                    <p>{d.card2Paragraph}</p>
                                </div>
                                <div className="right-card-links">
                                    <div className="right-card-link"><a className='explore-link' href='/'>{d.card2LinkText}</a></div>
                                    <div className="right-card-arrow">
                                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="css-1pf81q0-ArrowLink__icon"><path d="M16.86 11H4v2h12.86l-5.04 6h2.62l5.86-7-5.86-7h-2.62l5.04 6z"></path></svg>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    {/* 3rd card */}

                    <div className='cards'>
                        <div className="card">
                            <div className="left-card">
                                <img
                                    className="left-card-img"
                                    alt="Connect apps like ChatGPT, Slack, and Google Sheets to build custom workflows"
                                    aria-hidden="false"
                                    data-testid="img"
                                    loading="lazy"
                                    src={d.card3Image}
                                    style={{
                                        width: '100%',
                                        borderRadius: '12px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                            <div className="right-card">
                                <h2>{d.card3Heading}</h2>
                                <div className="right-card-paragraph">
                                    <p>{d.card3Paragraph}</p>
                                </div>
                                <div className="right-card-links">
                                    <div className="right-card-link"><a className='explore-link' href='/'>{d.card3LinkText}</a></div>
                                    <div className="right-card-arrow">
                                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="css-1pf81q0-ArrowLink__icon"><path d="M16.86 11H4v2h12.86l-5.04 6h2.62l5.86-7-5.86-7h-2.62l5.04 6z"></path></svg>
                                    </div>
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

export default Cards
