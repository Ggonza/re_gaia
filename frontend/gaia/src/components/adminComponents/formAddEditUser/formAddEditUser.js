import React from 'react';
import {Button, Form, Label} from "semantic-ui-react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {UseUser} from "../../../hooks";
import "./formAddEditUser.scss";


export function FormAddEditUser(props) {
    const {onClose, onRefetch, user} = props;
    const {addUser, updateUser} = UseUser();
    const formik = useFormik({
        initialValues: initialValues(user),
        validationSchema: Yup.object(user ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if (user) await updateUser(user.id, formValue);

                else await addUser(formValue);

                onRefetch();
                onClose();
            } catch (e) {
                console.error(e);
            }
        }
    });

    const roleOptions = [
        {key: 'pr', value: 'b1adf2c4-314b-11ed-a96c-c3636874a19f', text: 'Profesor'},
        {key: 'cf', value: 'b228f942-314b-11ed-a96d-4f673c90d517', text: 'Cocinero'}
    ];

    return (
        <Form className="add-edit-user-form" onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input name="first_name" label="Nombres" value={formik.values.first_name}
                            onChange={formik.handleChange} error={formik.errors.first_name}/>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    name="last_name" label="apellidos" value={formik.values.last_name}
                    onChange={formik.handleChange} error={formik.errors.last_name}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    name="username" label="Nombre de usuario" value={formik.values.username}
                    onChange={formik.handleChange} error={formik.errors.username}/>
                <Form.Input
                    name="password" label="Contra" value={formik.values.password}
                    onChange={formik.handleChange} error={formik.errors.password}/>

            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    name="email" label="Correo" value={formik.values.email}
                    onChange={formik.handleChange} error={formik.errors.email}
                />
                <Form.Select
                    name="role" label="Seleccionar rol de usuario" options={roleOptions}
                    error={formik.errors.role}
                    onChange={(_, data) => {
                        formik.setFieldValue('role', data.value)
                    }}
                />
            </Form.Group>
            <Form.Group widths="1">
                <Label>Activo</Label>
                <Form.Checkbox
                    name="is_active" toggle checked={formik.values.is_active}
                    error={formik.errors.is_active}
                    onChange={(_, data) => {
                        formik.setFieldValue('is_active', data.checked)
                    }}/>
            </Form.Group>

            <Button type="submit" primary fluid content={user ? "ACTUALIZAR" : "CREAR"}/>

        </Form>
    );
}

function initialValues(user) {
    return {
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        username: user?.username || "",
        email: user?.email || "",
        role: user?.role || "",
        is_active: !!user?.is_active,
        password: "",
    }
}

function newSchema() {
    return {
        first_name: Yup.string(),
        last_name: Yup.string(),
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        is_active: Yup.bool(),
        password: Yup.string().required(true),
        role: Yup.string(),
    };
}

function updateSchema() {
    return {
        first_name: Yup.string().required(true),
        last_name: Yup.string().required(true),
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        is_active: Yup.bool(),
        password: Yup.string(),
        role: Yup.string(),
    };
}