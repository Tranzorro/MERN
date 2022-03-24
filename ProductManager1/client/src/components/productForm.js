import React, { useState } from  'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
    
const ProductForm = () => {
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const [TitleError, setTitleError] = useState(""); 
    const [PriceError, setPriceError] = useState(""); 
    const [DescriptionError, setDescriptionError] = useState("");
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/create',{
            Title,
            Price,
            Description,
        
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            // setTitle(res.data.results);
            // setPrice(res.data.results);
            // setDescription(res.data.results);
        })
        .catch((err)=>console.log(err))
}

    // const validatorEvent = (e) => {
    //     e.preventDefault();

    //     if (Title.length < 1){
    //         setTitleError("cannot be left blank!");
    //     }
    //     else if (Title.length < 3){
    //         setTitleError("title must be greater than 2 characters");
    //     }
    //     else{
    //             setTitle("");
    //         }
        
    //     if (Price.length < 1){
    //         setPriceError("cannot be left blank!");
    //     }
    //     else{
    //             setPrice("");
    //         }
        
    //     if (Description.length < 1){
    //         setDescriptionError("cannot be left blank!");
    //     }
    //     else if(Description.length <6){
    //         setDescriptionError("Description must be longer than 5 characters");
    //     }
    //     else{
    //             setDescription("");
    //     }

    // }
    
    return(
        <form onSubmit={onSubmitHandler} >
            <div>
                <h1> Product Manager </h1>
                <label>Title: </label> 
                <input type="text" onChange={ (e) => setTitle(e.target.value) } />
                {
                    TitleError?
                    <p>{TitleError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Price: </label> 
                <input type="text" onChange={ (e) => setPrice(e.target.value) } />
                {
                    PriceError?
                    <p>{PriceError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Description: </label> 
                <input type="text" onChange={ (e) => setDescription(e.target.value) } />
                {
                    DescriptionError?
                    <p>{DescriptionError}</p>
                    : ''
                }
            </div>
            <input type="submit" value="Create Product" />
            <Link to={'/all'}> view all products</Link>
        </form>
    );
};
    
export default ProductForm;