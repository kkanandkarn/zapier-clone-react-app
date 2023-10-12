import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  function showAlert(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (values.username === 'admin' && values.password === 'admin123') {
      localStorage.setItem('username', values.username)
      navigate('/admin')
    }
    else {
      showAlert('Invalid Credentials', 'Please login with valid credentials', 'error');
    }


  }
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <form className="border border-primary rounded p-4 shadow" style={{ width: '500px' }} onSubmit={handleSubmit}>
        <h2 className='text-center'>Admin login</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name</label>
          <input type="text" className="form-control border-primary" id="username" aria-describedby="emailHelp" autoComplete='off' onChange={e => setValues({ ...values, username: e.target.value })} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control border-primary" id="password" onChange={e => setValues({ ...values, password: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;
