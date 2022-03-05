const express = require("express");
const faker = require("faker");
const app = express();


const createUser= ()=>{
    const newUser = {
        _id: faker._id(),
        firstName: faker.firstName(),
        lastName: faker.lastName(),
        phoneNumber: faker.phoneNumber(),
        email: faker.email(),
        password: faker.password()
    };
    return newUser;
}
const createCompany= ()=>{
    const newCompany = {
        _id: faker._id(),
        name: faker.name(),
        address: {
            street: faker.street(),
            city: faker.city(),
            state: faker.state(),
            zipCode: faker.zipCode(),
            country: faker.country(),
        }
    };
    return newCompany;
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/welcome", (request, response)=>{
    console.log("this is a welcome api route");
    response.json({message: "welcome to our api, this is the response"})
})
app.post("/api/welcome", (request, response)=>{
    console.log("this is a post request");
    response.json({message: ["test 1", "list test 2", "something goes here3"], ourRequestBody: request.body})
    console.log(request.body);
})

app.get("/api/users/new", (request, response)=>{
    console.log("this is the new user api route");
    response.json({message: "you are now looking to create a new user..."})
})
app.post("/api/users/new", (request, response)=>{
    console.log("this is the new user api post request");
    response.json({message: createUser(), ourRequestBody: request.body})
    console.log(request.body);
})
app.get("/api/companies/new", (request, response)=>{
    console.log("this is the new company api route");
    response.json({message: "you are now looking to create a new company..."})
})
app.post("/api/companies/new", (request, response)=>{
    console.log("this is the new company api post request");
    response.json({message: createCompany(), ourRequestBody: request.body})
    console.log(request.body);
})
app.get("/api/user/company", (request, response)=>{
    console.log("this is the new company and user api route");
    response.json({message: "you are now looking to create a new company and user at the same time..."})
})
app.post("/api/user/company", (request, response)=>{
    console.log("this is the new company and user api post request");
    response.json({message: [createCompany(),createUser()], ourRequestBody: request.body})
    console.log(request.body);
})

app.listen(8000, ()=>console.log("you are connected to port 8000"));