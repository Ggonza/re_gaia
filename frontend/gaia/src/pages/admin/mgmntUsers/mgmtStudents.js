import React, {useEffect, useState} from 'react';
import {UseUser} from "../../../hooks";
import {TableUsers, HeaderPage, FormAddEditUser} from "../../../components";
import {ModalBasic} from "../../../components/common";
import {Loader} from "semantic-ui-react";

export function MgmtStudents() {
    const [titleModal, setTitleModal] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const {loading, users, getUsers} = UseUser();

    useEffect(() => {
        getUsers();
    }, [refetch]);
    const openCloseModal = () => setShowModal((prevState) => !prevState);

    //FUNCION PARA AGREGAR USUARIOS
    const addUser = () => {
        setTitleModal("Crear nuevo usuario");
        setContentModal(<FormAddEditUser onClose={openCloseModal} onRefetch={onRefetch}/>);
        openCloseModal();
    };
    //---
    const onRefetch = () => setRefetch((prevState) => !prevState);

    // FUNCION PARA EDITAR USUARIOS
    const updateUser = (data) => {
        setTitleModal("Acutalizar usuario");
        setContentModal(<FormAddEditUser onClose={openCloseModal} onRefetch={onRefetch} user={data}/>)
        openCloseModal();
        console.log("EDITAR USER", data)
    };


    return (
        <>
            <HeaderPage title="Estudiantes" btnTitle="Cargar Estudiantes" btnClick={addUser}/>
            {loading ? (
                <Loader active inline="centered">
                    Cargango...
                </Loader>
            ) : (
                <TableUsers users={users} updateUser={updateUser}/>
            )}
            <ModalBasic show={showModal} title={titleModal} onClose={openCloseModal}
                        children={contentModal}/>
        </>
    );
}