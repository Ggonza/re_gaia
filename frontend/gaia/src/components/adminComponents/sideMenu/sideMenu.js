import React from 'react';
import "./sideMenu.scss";
import {Divider, Icon, Menu} from "semantic-ui-react";
import {Link, useLocation} from "react-router-dom"

export function SideMenu(props) {
    const {children} = props;
    const {pathname} = useLocation();


    return (
        <div>
            <div className="side-menu-admin">
                <MenuLeft pathname={pathname}/>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

function MenuLeft(props) {
    const {pathname} = props;
    return (

        <Menu fixed="left" borderless className="side" vertical>
            <Divider horizontal>Principal</Divider>
            <Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}>
                <Icon name="home"/>Inicio
            </Menu.Item>
            {/*----*/}
            <Divider horizontal>Gestion de personal</Divider>
            <Menu.Item as={Link} to={"/admin/userManagement/Students"}
                       active={pathname === "/admin/userManagement/Students"}>
                <Icon name="student"/>Gestion Estudiantes
            </Menu.Item>
            <Menu.Item as={Link} to={"/admin/userManagement/Workers"}
                       active={pathname === "/admin/userManagement/Workers"}>
                <Icon name="users"/>Gestion Trabajadores
            </Menu.Item>
            {/*----*/}
            <Divider horizontal>Gestion Comedor</Divider>
            <Menu.Item as={Link} to={"/admin/management/kitchen"}
                       active={pathname === "/admin/management/kitchen"}>
                <Icon name="utensils"/> Registros Produccion
            </Menu.Item>
            <Menu.Item as={Link} to={"/admin/management/residuals"}
                       active={pathname === "/admin/management/residuals"}>
                <Icon name="trash"/> Registros Desperdicios
            </Menu.Item>

            {/*----*/}
            <Divider horizontal>Centro de asistencia</Divider>
            <Menu.Item as={Link} to={"/admin/assistantSupport"} active={pathname === "/admin/assistantSupport"}>
                <Icon name="help"/> Contactos - Ayuda
            </Menu.Item>
        </Menu>
    )
}