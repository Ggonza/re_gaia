import React from 'react';
import {Button, Form} from "semantic-ui-react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {loginAPI} from "../../api/auth";
import "./images/gaia.png";

export function LoginUsers() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit:async (formValue) => {
            try {
                const response = await loginAPI(formValue);
                const {access} = response;
                console.log(access);
            } catch (e) {
                toast.error(e.message);
            }
        }
    });

    return (
        <div className="loginpage">
            <div className="loginUser">
                    <Form className="login-form loginUser__content" onSubmit={formik.handleSubmit}>
                        <h2 id="ingresaText" className="text-center">INGRESAR</h2>
                        <Form.Input type="text" name="username" className="col mt-4" placeholder="Usuario"
                               value={formik.values.user} onChange={formik.handleChange} error={formik.errors.user}/>
                        <Form.Input type="password" name="password" className="mt-2" placeholder="Contraseña"
                               value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
                        <Button type="submit" className="mt-4 col-6 " color="google plus" content="Ingresar" />
                        <a className="d-flex justify-content-center mt-4" href="">Recuperar Contraseña</a>
                    </Form>
            </div>

        </div>
    );
}

function initialValues() {
    return{
        username:"",
        password:"",
    };
}

function validationSchema(){
    return{
        username:Yup.string().required('Se debe ingresar un usuario'),
        password:Yup.string().required('se debe ingresar una contraseña'),
    }
}