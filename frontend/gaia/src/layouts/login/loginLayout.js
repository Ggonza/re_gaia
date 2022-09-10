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
        if (aa.me.role === "ADMIN") return (
            <Navigate replace to= "/admin" />
        )
       //retorna a la pagina de profesor
        if (aa.me.role === "PROFESOR") return (
            <Navigate replace to= "/profesor" />
        )
       //retorna a la pagina de chef
        if (aa.me.role === "CHEF") return (
            <Navigate replace to= "/chef" />
        )

    }
}