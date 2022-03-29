import React, { useState } from  'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
    
const AuthorForm = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({}); 
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/create',{
            name
        
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err =>{
            setErrors(err.response.data.errors);
        })
}
    return(
        <form onSubmit={onSubmitHandler} >
            <div>
                <h1> Add an author: </h1>
                <label>Name: </label> 
                <input type="text" onChange={ (e) => setName(e.target.value) } />
                {
                    errors.name ?
                    <p>{errors.name.message}</p>
                    : null
                }
            </div>
            <input type="submit" value="submit" />
            <Link to={'/'}> home</Link>
        </form>
    );
};
    
export default AuthorForm;