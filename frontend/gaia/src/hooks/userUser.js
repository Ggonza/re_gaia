import {useState} from "react";
import {getMeApi, getUsersApi, addUserApi, updateUserApi} from "../api/auth";
import {useAuth} from ".";

export function UseUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(null);
    const {auth} = useAuth();

    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (e) {
            throw e;
        }
    };

    //MUESTRA USUARIOS
    const getUsers = async () => {
        try {
            setLoading(true);
            const response = await getUsersApi(auth.token);
            setLoading(false);
            setUsers(response);
        } catch (e) {
            setLoading(false);
            setError(e);
        }
    };
    // AGREGA USUARIOS
    const addUser = async (data) => {
        try {
            setLoading(true);
            await addUserApi(data, auth.token);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(e)
            console.log("ERROR", e)
        }
    }
    //ACTUALIZA USUARIOS
    const updateUser = async (id, data) =>{
        try {
            setLoading(true);
            await updateUserApi(id, data, auth.token);
            setLoading(false);
        }catch (e) {
            setLoading(false);
            setError(e);
        }
    }


    return {
        loading,
        error,
        users,
        getMe,
        getUsers,
        addUser,
        updateUser,
    };
}