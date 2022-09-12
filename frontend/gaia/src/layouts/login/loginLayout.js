import React from 'react';
import {useAuth} from "../../hooks";
import "./loginLayout.scss"
import {ProfesorLayout} from "../profesorLayout";
import {ChefLayout} from "../chefLayout";
import { Navigate } from "react-router-dom";

export function LoginLayout(props) {
    const {children} = props;
    const {auth} = useAuth();
    const aa = auth;

    if (auth == null || !auth) {
        return (
            <div>
                {children}
            </div>
        );
    } else {
        //retorna a la pagina de admin
        if (aa.me.role === "b126eb44-314b-11ed-a96b-7bf2e9fa866a") return (
            <Navigate replace to= "/admin" />
        )
       //retorna a la pagina de profesor
        if (aa.me.role === "b1adf2c4-314b-11ed-a96c-c3636874a19f") return (
            <Navigate replace to= "/profesor" />
        )
       //retorna a la pagina de chef
        if (aa.me.role === "b228f942-314b-11ed-a96d-4f673c90d517") return (
            <Navigate replace to= "/chef" />
        )

    }
}