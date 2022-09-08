import React from 'react';
import {LoginUsers} from "../../pages/login";
import {useAuth} from "../../hooks";
import "./loginLayout.scss"

export function LoginLayout(props) {
    const {children} = props;
    const {auth} = useAuth();
    if (!auth) return <LoginUsers/>;
    return (
        <div>

            {children}
        </div>
    );
}