import React, {useState} from 'react';

const Person = (props) =>{
    const{firstName, lastName, age, hairColor} = props;
    const [getAge, setAge] = useState(age);
    
    const getOld =()=>{setAge(getAge +1);}
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {getAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={getOld}> birthday for {firstName}!</button>
        </div>
    )
}
export default Person;