import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
 const [credientials, setcredientials] = useState({name:"",email:"",password:"",geolocation:""})

const handleSubmit= async (e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name:credientials.name,email:credientials.email,password:credientials.password,location:credientials.geolocation})
    })
    const json = await response.json()
    console.log(json);
    if(!json.success){
        alert("enter valid credientials")
    }
}
const onchange=()=>{
    setcredientials({...credientials,[event.target.name]:event.target.value})
}

    return (
        <>
            <div className='container'>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={credientials.name} onChange={onchange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' value={credientials.email} onChange={onchange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onchange} name='password' value={credientials.password} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Address</label>
                    <input type="text" onChange={onchange} className="form-control" name="geolocation" value={credientials.geolocation} />
                </div>
                
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
            </form>
            </div>
        </>
    )
}
