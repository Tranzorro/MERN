import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
const UpdateProduct = (props) => {
    const { id } = useParams();
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({}); 
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/products/' + id)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTitle(res.data.Title);
            setPrice(res.data.Price);
            setDescription(res.data.Description);
        })
        .catch((err)=>console.log(err))
    },[])
    const updateProduct = (e) => {
        e.preventDefault();
        console.log(id);
        axios.put('http://localhost:8000/api/products/edit/' + id, {
            Title,
            Price,
            Description,
        })
            .then(res => {
                console.log(res);
                // navigate("/"); 
            })
            // .catch(err => console.log(err))
            .catch(err =>{
                console.log("===");
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
            {/* {errors.map((err,index) => <p key={index}>{err} </p>)} */}
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="Title" 
                    value={Title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                    {
                    errors.Title ?
                    <p>{errors.Title.message}</p>
                    : null
                    // TitleError?
                    // <p>{TitleError}</p>
                    // : ''
                }
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="Price"
                    value={Price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                    {
                    errors.Price ?
                    <p>{errors.Price.message}</p>
                    : null
                    // PriceError?
                    // <p>{PriceError}</p>
                    // : ''
                }
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="Description"
                    value={Description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                    {
                    errors.Description ?
                    <p>{errors.Description.message}</p>
                    : null
                    // DescriptionError?
                    // <p>{DescriptionError}</p>
                    // : ''
                }
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default UpdateProduct;
