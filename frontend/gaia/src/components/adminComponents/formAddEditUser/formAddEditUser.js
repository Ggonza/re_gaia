import React from 'react';
import {Button, Form, Checkbox} from "semantic-ui-react";
import "./formAddEditUser.scss"
export function FormAddEditUser(){
    return(
        <Form className="add-edit-user-form">
            <Form.Input name="username" placeholder="Usuario"/>
            <Form.Input name="first_name" placeholder="Nombres"/>
            <Form.Input name="last_name" placeholder="000"/>
            <Form.Input name="password" placeholder="Contraseña"/>
            <Form.Input name="email" placeholder="000"/>
            <div className="add-edit-user-form__role">
                <Checkbox toggle />Rol de usuario
            </div>
            <Button type="submit" primary fluid content="Crear" />
        </Form>
    );
}