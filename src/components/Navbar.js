import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Navbar = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:5000/navbar')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const redirectAdmin = () => {
    if (localStorage.getItem('username')) {
      navigate('/admin')
    }
    else {
      navigate('/login')
    }
  }
  return (
    <div className="nav-bar">
      <div className='navbar'>
        {data.map((d, i) => (
          <div className="nav-components" key={i}>

            <div className="nav-links">
              <img src={d.logo} className='logo-img' alt="" />
              <div className="nav-link"> <p>{d.navlink1}</p> <svg width="24" height="24" viewBox="0 0 24 24" fill="#2D2E2E" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.2999L19 11.4399V8.81995L12 14.6999L5 8.81995V11.4399L12 17.2999Z" fill="#2D2E2E"></path></svg></div>
              <div className="nav-link"> <p>{d.navlink2}</p>  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2D2E2E" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.2999L19 11.4399V8.81995L12 14.6999L5 8.81995V11.4399L12 17.2999Z" fill="#2D2E2E"></path></svg></div>
              <div className="nav-link"> <p>{d.navlink3}</p>  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2D2E2E" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.2999L19 11.4399V8.81995L12 14.6999L5 8.81995V11.4399L12 17.2999Z" fill="#2D2E2E"></path></svg></div>
              <div className="nav-link"> <p>{d.navlink4}</p>  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2D2E2E" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.2999L19 11.4399V8.81995L12 14.6999L5 8.81995V11.4399L12 17.2999Z" fill="#2D2E2E"></path></svg></div>
            </div>
            <div className="nav-buttons">
              <div className="nav-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="#403F3E" xmlns="http://www.w3.org/2000/svg"><path d="M5.13405 17.4518L2.2915 20.2943L3.7057 21.7085L6.54825 18.866L5.13405 17.4518Z" fill="#403F3E"></path><path d="M13 3C8.59 3 5 6.59 5 11C5 14.75 7.98 19 13 19C17.41 19 21 15.41 21 11C21 6.59 17.41 3 13 3ZM13 17C9.2 17 7 13.79 7 11C7 7.69 9.69 5 13 5C16.31 5 19 7.69 19 11C19 14.31 16.31 17 13 17Z" fill="#403F3E"></path></svg></div>
              <div className="nav-button">{d.navlink5}</div>
              <div className="nav-button">{d.button1Text}</div>
              <div className="nav-button mx-1"><span>{d.button2Text}</span></div>
              <button onClick={redirectAdmin} className="btn btn-success">Admin</button>
            </div>


          </div>
        ))
        }


      </div>
    </div>
  )
}

export default Navbar
