import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
const UpdateAuthor = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({}); 
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors/' + id)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setName(res.data.Title);
        })
        .catch((err)=>console.log(err))
    },[])
    const updateAuthor = (e) => {
        e.preventDefault();
        console.log(id);
        axios.put('http://localhost:8000/api/authors/edit/' + id, {
            name,
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err =>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div>
            <h1>edit this author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    {
                    errors.name ?
                    <p>{errors.name.message}</p>
                    : null
                }
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default UpdateAuthor;
