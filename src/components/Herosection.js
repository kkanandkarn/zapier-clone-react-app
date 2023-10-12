import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const Herosection = () => {
    const [showControls, setShowControls] = useState(false);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/herosection')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const handlePlayClick = () => {
        setShowControls(true);
        const video = document.getElementById('heroVideo');
        if (video) {
            video.play();
        }
    };
    return (
        <div className='hero-section'>

            {data.map((d, i) => (
                <div className="hero-center" key={i}>
                    <div className="hero-center-head">
                        <h1>{d.heroSectionHeader}</h1>
                        <p>{d.heroSectionHeaderParagraph}</p>
                    </div>
                    <div className="hero-buttons">
                        <div className="hero-button1">{d.heroSectionButton1}</div>
                        <div className="hero-button2">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2041 8.34882V12.3006H15.6958C15.4546 13.5715 14.731 14.6476 13.6456 15.3712L16.9573 17.9408C18.8868 16.1597 20 13.5437 20 10.4361C20 9.71257 19.9351 9.01677 19.8145 8.34892L10.2041 8.34882Z" fill="#4285F4"></path><path d="M4.48548 12.1463L3.73857 12.7181L1.09473 14.7774C2.77377 18.1077 6.21509 20.4083 10.2039 20.4083C12.959 20.4083 15.2688 19.4992 16.9572 17.9408L13.6455 15.3712C12.7364 15.9834 11.5768 16.3545 10.2039 16.3545C7.55088 16.3545 5.29677 14.5641 4.48966 12.1522L4.48548 12.1463Z" fill="#34A853"></path><path d="M1.09454 5.63083C0.398843 7.00369 0 8.55289 0 10.2041C0 11.8553 0.398843 13.4045 1.09454 14.7773C1.09454 14.7865 4.4898 12.1428 4.4898 12.1428C4.28571 11.5306 4.16509 10.8812 4.16509 10.204C4.16509 9.5267 4.28571 8.87739 4.4898 8.26514L1.09454 5.63083Z" fill="#FBBC05"></path><path d="M10.2042 4.0631C11.707 4.0631 13.0428 4.58257 14.1096 5.58444L17.0316 2.66238C15.2598 1.01119 12.9593 0 10.2042 0C6.2153 0 2.77377 2.29129 1.09473 5.63083L4.48987 8.26536C5.29688 5.85345 7.5511 4.0631 10.2042 4.0631Z" fill="#EA4335"></path></svg>
                            {d.heroSectionButton2}
                        </div>
                    </div>
                    <div className="markers">
                        <p> <FontAwesomeIcon icon={faCheck} style={{ color: '#42464d' }} /> <b>{d.heroSectionMarker1B}</b> {d.heroSectionMarker1P}</p>
                        <p>  <FontAwesomeIcon icon={faCheck} style={{ color: '#42464d' }} /> <b>{d.heroSectionMarker2B}</b> {d.heroSectionMarker2P}</p>
                    </div>
                    <div className="hero-video">
                        <video
                            id="heroVideo"
                            width="100%"
                            height="100%"
                            loop
                            muted
                            playsInline
                            controls={showControls} // Use the controls attribute conditionally
                        >
                            <source src={d.heroSectionVideo} type="video/mp4" />
                        </video>
                        {!showControls && (
                            <div className="play-button" onClick={handlePlayClick}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="svg-inline--fa fa-play " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="black" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>
                            </div>
                        )}
                    </div>
                </div>

            ))
            }

        </div>
    )
}

export default Herosection


