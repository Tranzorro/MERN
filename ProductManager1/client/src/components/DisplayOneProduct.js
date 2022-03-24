import React, { useEffect, useState } from  'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const DisplayOneProduct = (props) =>{

    // const [ removeFromDom, theProduct, setTheProduct] = useState({});
    const {removeFromDom, theProduct, setTheProduct} = props;
    const {id} = useParams();
    const deleteProduct = (id) =>{
        axios.delete('http://localhost:8000/api/products/delete/' + id)
        .then((res)=>{
            removeFromDom(id);
        })
        .catch((err)=>console.log(err))
    }

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products/' + id)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTheProduct(res.data);
        })
        .catch((err)=>console.log(err))
    },[])

    return(
        <div>
            <h1> {theProduct.Title}</h1>
            <p> Price: {theProduct.Price}</p>
            <p> Description: {theProduct.Description}</p>
            <hr/>
            <Link to={'/all'}> back to all products</Link>
            <hr/>
            <Link to={'/api/products/edit/' + id}> edit this product</Link>
            <hr/>
            <button onClick={(e)=>{deleteProduct(theProduct._id)}}> Delete </button>
        </div>
    )

}

export default DisplayOneProduct;