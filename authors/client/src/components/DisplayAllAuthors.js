import React, { useEffect, useState } from  'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const DisplayAllAuthors = (props) =>{

    const {authorList, setAuthorList, removeFromDom} = props;
    const {id} = useParams();
    const navigate = useNavigate();
    const deleteAuthor = (id) =>{
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
        .then((res)=>{
            removeFromDom(id);
            navigate("/"); 
        })
        .catch((err)=>console.log(err))
    }
    const editAuthor = (id) =>{
        navigate('/api/authors/edit/' + id);
    }

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors/getAll')
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err)=>console.log(err))
    },[])

    return(
        <div>
            <Link to={'/new'}> add an author </Link>
            <h1> Favorite Authors</h1>
            <table>
                <tr>
                    <th> Author</th>
                    <th> Actions available</th>
                </tr>
                {
                    authorList.map((author, index)=>{
                        return(
                            <tr key={index}>
                                <th><Link to={'/api/authors/' + author._id}> {author.name} </Link></th>
                                <th><button onClick={(e)=>{editAuthor(author._id)}}> Edit this author </button> | <button onClick={(e)=>{deleteAuthor(author._id)}}> Delete </button></th>
                            </tr>
                    )})
                }
            </table>
        </div>
    )

}

export default DisplayAllAuthors;