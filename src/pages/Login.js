
import axios from 'axios';
import React from 'react';
import { Button,Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit}=useForm(); 


    const submit = data => {
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
        .then(res => {
            console.log(res.data.data.token)
            localStorage.setItem("token", res.data.data.token)
            navigate("/")
        })
        .catch(error =>{
            
            console.log(error.response)
            if(error.response.status === 404 ){
                alert("paila mijo, esa cuenta esta mal")
    
           }
        })
       
    console.log(data);
    }



    return (
        <div>
            <h1>login</h1>

            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password")}type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Login;