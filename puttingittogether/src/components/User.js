import React, {useState} from 'react';



const User = (props) => {

    
    const {First_Name, Last_Name, Age, Hair_Color} = props;
    const [getAge, setAge] = useState(Age);
    
    const getOld =()=>{setAge(getAge +1);}
    
    return(
        <div>
            <h1>
                {Last_Name}, {First_Name} 
            </h1>
            <p>
                Age: {getAge}
            </p>
            <p>
                Hair Color: {Hair_Color}
            </p>
            <button onClick={getOld}>
                experience 365 days simultaneously!
            </button>
        </div>
    )
}
export default User;