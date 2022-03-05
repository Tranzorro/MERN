const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();

// console.log(faker.address.streetName());

const createUser= ()=>{
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
}
const createCompany= ()=>{
    const newCompany = {
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return newCompany;
}

const newfakeUser= createUser();
const newfakeCompany = createCompany();

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
    response.json(newfakeUser)
    console.log({user: newfakeUser});
})
app.get("/api/companies/new", (request, response)=>{
    console.log("this is the new company api route");
    response.json({message: "you are now looking to create a new company..."})
})
app.post("/api/companies/new", (request, response)=>{
    console.log("this is the new company api post request");
    response.json(newfakeCompany)
    console.log({company: newfakeCompany});
})
app.get("/api/user/company", (request, response)=>{
    console.log("this is the new company and user api route");
    response.json({message: "you are now looking to create a new company and user at the same time..."})
})
app.post("/api/user/company", (request, response)=>{
    console.log("this is the new company and user api post request");
    response.json([{newfakeCompany},{newfakeUser}])
    console.log([{company: newfakeCompany, user: newfakeUser}]);
})

app.listen(8000, ()=>console.log("you are connected to port 8000"));