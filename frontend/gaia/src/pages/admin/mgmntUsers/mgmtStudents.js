import React, {useEffect, useState} from 'react';
import {UseUser} from "../../../hooks";
import {TableUsers, HeaderPage,FormAddEditUser} from "../../../components";
import {ModalBasic} from "../../../components/common";
import {Loader} from "semantic-ui-react";

export function MgmtStudents() {
    const [titleModal, setTitleModal] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);
    const {loading, users, getUsers} = UseUser();

    useEffect(() => {
        getUsers();
    }, []);
    const openCloseModal = () => setShowModal((prevState) => !prevState);
    const addUser = () =>{
        setTitleModal("Crear nuevo usuario");
        setContentModal(<FormAddEditUser />);
        openCloseModal();
    }

    return (
        <>
            <HeaderPage title="Estudiantes" btnTitle="Cargar Estudiantes" btnClick={addUser}/>
            {loading ? (
                <Loader active inline="centered">
                    Cargango...
                </Loader>
            ) : (
                <TableUsers users={users}/>
            )}
             <ModalBasic show={showModal} title={titleModal} onClose={openCloseModal}
                         children={contentModal} />
        </>
    );
}