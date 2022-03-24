import React, { useEffect, useState } from  'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const DisplayAllProducts = (props) =>{

    const [productList, setProductList] = useState([{}]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products/getAll')
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=>console.log(err))
    },[])

    return(
        <div>
            <h1> All Products</h1>
            {
                productList.map((product, index)=>{
                    return(
                    <p key={index}>
                        <Link to={'/api/products/' + product._id}> {product.Title} </Link>
                        <hr/>
                    </p>
                )})
            }
        </div>
    )

}

export default DisplayAllProducts;