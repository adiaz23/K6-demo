import http from 'k6/http';
import { check, sleep } from 'k6';
import username from '../data/userData.js';

export function registerUser(url){   
        let fields =  {
            username: username.username, 
            first_name: username.firstname, 
            lastname:username.lastname, 
            email:username.email, 
            password: username.password
        }

        let response = http.post(url, fields);
        console.log(username);
        sleep(2);
        check(response, {
            'Response code was 201': response => response.status === 201,
            'Status test is "201 Created"': response => response.status_text === "201 Created",
            'Username saved correctly': response => (response.body).includes(username.username)
        } );
        console.log(response);
}

export function registerCreatedUser(url){
        let fields =  {username: "test1", first_name: "test2", lastname:"test3", email: "email@example.com", password: "pass"}
        let response = http.post(url, fields);
        sleep(2);
        check(response, {
            'Response code was 400': response => response.status === 400,
            'Username error message is "A user with that username already exists."': response => (response.body).includes("A user with that username already exists."),
            'Email error message is "User with this email already exists!"': response => (response.body).includes("User with this email already exists!")
        });
    
}
