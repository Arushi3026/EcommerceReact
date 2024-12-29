import React , {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/usercontext';
import Card from './card';
import data from '../data.json';
import "../styles/home.css";

function Home(){
    const {userData} = useContext(UserContext);
    const navigate = useNavigate();
    return(
        <>
        <h1> Hello {userData?.name || "Guest"}</h1>
        <button onClick={() => navigate("/profile")}> Go To Profile</button>
        <div className='itemsdiv'>
            {data.map((item) => (
                 <Card key={item.id} name={item.name} price= {item.price} />
            ))}
        </div>
      
        </>
    )
}

export default Home;