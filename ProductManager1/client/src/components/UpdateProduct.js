import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
const UpdateProduct = (props) => {
    const { id } = useParams;
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const navigate = useNavigate();
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/products/' + id)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTitle(res.data);
            setPrice(res.data);
            setDescription(res.data);
        })
        .catch((err)=>console.log(err))
    },[])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/edit/' + id, {
            Title,
            Price,
            Description,
        })
            .then(res => {
                console.log(res);
                navigate("/"); 
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="Title" 
                    value={props.Title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="Price"
                    value={props.Price} 
                    onChange={(e) => { Price(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="Description"
                    value={props.Description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default UpdateProduct;
