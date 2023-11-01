import Faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js"

let userData = {
    username: Faker.internet.userName(),
    firstname: Faker.name.firstName(),
    lastname: Faker.name.lastName(),
    email: Faker.internet.exampleEmail(),
    password: Faker.password
}
  
export default userData;