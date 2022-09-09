import React from 'react';
import "./adminLayout.scss"
import {useAuth} from "../../hooks";
import {TopMenu} from "../../components/adminComponents";
import {LoginUsers} from "../../pages/login";

export function AdminLayout(props) {
    const {logout} = useAuth();
    const {auth} = useAuth();
    const {children} = props;

    if (!auth) return <LoginUsers/>
    return (
        <div className="admin-layout">
            <div className="admin-layout__menu">
                <TopMenu/>

            </div>
            <div className="admin_layout__main-content">
                <button onClick={logout}>CERRAR SESION</button>
                {children}
            </div>

        </div>
    );
}