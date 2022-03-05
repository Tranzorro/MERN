import React from "react";
import { useParams } from "react-router-dom";
const WordComponent = (props)=>{

    const {param,color1,color2} = useParams();
    return(
        <div>
            {
                isNaN(param)?
                <p style={{color:color1, backgroundColor:color2}}> the word is {param} </p>
                :<p style={{color:color1, backgroundColor:color2}}> the number is {param} </p>
            }
            
        </div>
    )

}

export default WordComponent;