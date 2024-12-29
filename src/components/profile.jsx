import React, { useContext } from 'react';
import { UserContext } from '../context/usercontext';
import '../styles/profile.css';
import icon from '../images/profile.png';

function Profile(){
    const {userData} = useContext(UserContext);
    return(
        
    
        <div className='main'>
            <div className='heading'>
            <h1 className='heading1'>Welcome {userData.name}</h1>
            <h3 className='heading2'>Email: {userData.email}</h3>
            <h3 className='heading3'>Password: {userData.password}</h3>
            </div>
            <img src={icon} alt="user-profile" className='userimg'/>
        </div>
        
        
     

        
    )

}

export default Profile;