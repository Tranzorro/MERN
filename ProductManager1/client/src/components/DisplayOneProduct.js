import React, { useEffect, useState } from  'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const DisplayOneProduct = (props) =>{

    const [theProduct, setTheProduct] = useState({});
    const {id} = useParams();

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
            <Link to={'/all'}> back to all products</Link>
        </div>
    )

}

export default DisplayOneProduct;