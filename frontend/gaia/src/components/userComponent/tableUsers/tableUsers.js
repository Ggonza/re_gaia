import React from 'react';
import {Table, Button, Icon, Popup} from "semantic-ui-react";
import {map} from "lodash";
import "./tableUsers.scss";

export function TableUsers(props) {
    const {users} = props;
    return (
        <Table celled className="table-users-admin">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width="3">Usuario</Table.HeaderCell>
                    <Table.HeaderCell width="3">Nombres</Table.HeaderCell>
                    <Table.HeaderCell width="3">Apellidos</Table.HeaderCell>
                    <Table.HeaderCell width="4">Email</Table.HeaderCell>
                    <Table.HeaderCell width="2">Acciones</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {map(users, (user, index) => (
                    <Table.Row key={index}>
                        <Table.Cell width="2">{user.username}</Table.Cell>
                        <Table.Cell>{user.first_name}</Table.Cell>
                        <Table.Cell>{user.last_name}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Actions width="2" user={user}/>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

function Actions(props) {
    const {user} = props;
    return (
        <Table.Cell textAlign="right">
            <Button icon positive onClick={() => console.log(`editar usuario ${user.username}`)}>
                <Popup
                    trigger={<Icon name='pencil'/>}
                    content='Editar Usuario'
                />
            </Button>
            <Button icon negative onClick={() => console.log(`Eliminar usuario ${user.username}`)}>
                <Popup
                    trigger={<Icon name='trash'/>}
                    content='Eliminar Usuario'
                />
            </Button>
            <Button icon color="purple" onClick={() => console.log(`desactivar usuario ${user.username}`)}>
                {user.is_active ? <Popup
                    trigger={<Icon name='eye slash'/>}
                    content='Deshabilitar Usuario'
                /> : <Popup
                    trigger={<Icon name='eye'/>}
                    content='Habilitar Usuario'
                />}
            </Button>
        </Table.Cell>
    )
}