import React, { useEffect, useState } from  'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';

const DisplayOneAuthor = (props) =>{
    const navigate = useNavigate();
    const [theAuthor, setTheAuthor] = useState({});
    const {id} = useParams();
    
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            console.log(id);
            setTheAuthor(res.data);
        })
        .catch((err)=>console.log(err));
    },[]);

    return(
        <div>
            <h1> {theAuthor.name}</h1>
            <hr/>
            <Link to={'/'}> back to all authors</Link>
            <hr/>
        </div>
    )

}

export default DisplayOneAuthor;