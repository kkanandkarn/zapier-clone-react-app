import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';


const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/alert')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && (
        <div>
          <div className="alert">
            {data.map((d, i) => (
              <div className="alert-text">
                <p>
                  {d.alertText} <a href="/">{d.alertTextLink}</a>.
                </p>
              </div>
            ))
            }
            <div className="alert-cross-icon" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} style={{ color: '#ffffff', fontSize: '15px' }} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
