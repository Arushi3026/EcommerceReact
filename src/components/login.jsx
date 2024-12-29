import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import '../styles/login.css';
import { UserContext } from '../context/usercontext';

function Login() {
    const {setuserData} = useContext(UserContext);
    const navigate = useNavigate();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [logerror, setlogerror] = useState(false);
    

   const onhandlesubmit = (e) =>{
    e.preventDefault();
    const msg = (name === "Arushi Sharma") && (email === "arushi123@gmail.com") && (password === "1234");
    if(msg){
        navigate("/home");
        alert("Login succesfully");
        console.log(name, email, password);
        setuserData({name, email, password});
    }
    else{
        setlogerror(true);
        alert("Login Failed");
        setname(""); setemail(""); setpassword("");
    }
    }


    return (
        
        <form onSubmit={onhandlesubmit}>
            <div className='form1'>
                <h1 className='formhead'>Login Details</h1>
                <div className ="name">
                    <label htmlFor="name">Name</label>
                    <input type="name" id="name" value={name} onChange= {(e) => setname(e.target.value)} placeholder='Enter your Name'/>
                </div>
                <div className ="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange= {(e) => setemail(e.target.value)} placeholder='Enter your Email'/>
                </div>
                <div className ="pass">
                    <label htmlFor= "password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter your Password'/>
                </div>
                {logerror}
            <button>Submit</button>
            </div>
        </form>
        
    )
}

export default Login;