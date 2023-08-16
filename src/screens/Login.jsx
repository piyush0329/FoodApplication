import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [credientials, setcredientials] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credientials.email, password: credientials.password })
    })
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("enter valid credientials")
    }
    if (json.success) {
      localStorage.setItem("userEmail",credientials.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"));
      navigate("/")
    }
  }
  const onchange = () => {
    setcredientials({ ...credientials, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='email' value={credientials.email} onChange={onchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={onchange} name='password' value={credientials.password} id="exampleInputPassword1" />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/createuser" className="m-3 btn btn-danger">I,m a New User</Link>
        </form>
      </div>
    </>
  )
}
