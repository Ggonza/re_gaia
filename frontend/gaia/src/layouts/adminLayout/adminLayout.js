import React from 'react';
import "./adminLayout.scss"
import {useAuth} from "../../hooks";
import {TopMenu, SideMenu} from "../../components";
import {LoginUsers} from "../../pages/login";

export function AdminLayout(props) {
    const {logout} = useAuth();
    const {auth} = useAuth();
    const {children} = props;

    if (auth.me.role !== "b126eb44-314b-11ed-a96b-7bf2e9fa866a"){
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