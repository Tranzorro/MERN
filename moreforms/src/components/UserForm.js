import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword] = useState(""); 
    const [firstnameError, setfirstnameError] = useState(""); 
    const [lastnameError, setlastnameError] = useState(""); 
    const [emailError, setemailError] = useState(""); 
    const [passwordError, setpasswordError] = useState(""); 
    const [confirmpasswordError, setconfirmpasswordError] = useState(""); 
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            Firstname: Firstname, 
            Lastname: Lastname, 
            email: email, 
            password: password
        };
        console.log("Welcome", newUser);
    };

    const validatorEvent = (e) => {
        e.preventDefault();

        if (Firstname.length < 1){
            setfirstnameError("cannot be left blank!");
        }
        else if (Firstname.length < 3){
            setfirstnameError("first name must be greater than 2 characters");
        }
        else{
                setFirstname("");
            }
        
        if (Lastname.length < 1){
            setlastnameError("cannot be left blank!");
        }
        if (Lastname.length < 3){
            setlastnameError("last name must be greater than 2 characters");
        }
        else{
                setLastname("");
            }
        
        if (email.length < 1){
            setemailError("cannot be left blank!");
        }
        else if(email.length <6){
            setemailError("email must be longer than 5 characters");
        }
        else{
                setEmail("");
            }
        if (password.length < 1){
            setpasswordError("cannot be left blank!");
        }
        if (password.length < 9){
            setpasswordError("password must be at least 8 characters");
        }
        else{
                setPassword("");
            }
        if (confirmpassword <1){
            setconfirmpasswordError("need to match password!");
        }
        if (confirmpassword !== password){
            setconfirmpasswordError("passwords don't match");
        }
        else{
                setPassword("");
            }
        

    }
    
    return(
        <form onSubmit={ (e)=>validatorEvent(e)}>
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                {
                    firstnameError?
                    <p>{firstnameError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                {
                    lastnameError?
                    <p>{lastnameError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {
                    emailError?
                    <p>{emailError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                {
                    passwordError?
                    <p>{passwordError}</p>
                    : ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => password(e.target.value) } />
                {
                    confirmpasswordError?
                    <p>{confirmpasswordError}</p>
                    : ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;