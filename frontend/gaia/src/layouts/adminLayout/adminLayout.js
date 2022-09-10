import React from 'react';
import "./adminLayout.scss"
import {useAuth} from "../../hooks";
import {TopMenu, SideMenu} from "../../components/adminComponents";
import {LoginUsers} from "../../pages/login";

export function AdminLayout(props) {
    const {logout} = useAuth();
    const {auth} = useAuth();
    const {children} = props;

    if (!auth) return <LoginUsers/>
    if (auth.me.role !== "ADMIN"){
        logout();
    }
    return (
        <div className="admin-layout">
            <div className="admin-layout__menu">
                <TopMenu/>

            </div>
            <div className="admin_layout__main-content">
                <SideMenu>
                    {children}
                </SideMenu>
            </div>

        </div>
    );
}