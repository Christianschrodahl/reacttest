import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const schema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(4, "Password must contain atleast 4 letters")

});

function Login() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="LoginModule">
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" placeholder="Enter your email" ref={register} />
                    {errors.email && <p>{errors.email.message}</p>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter your password" ref={register} />
                    {errors.password && <p>{errors.password.message}</p>}
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>
    );
}

export default Login;