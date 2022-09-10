import {useState} from "react";
import {getMeApi, getUsersApi} from "../api/auth";
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

    const getUsers = async () =>{
        try {
            setLoading(true);
            const response = await getUsersApi(auth.token);
            setLoading(false);
            setUsers(response);
        }catch (e) {
            setLoading(false);
            setError(e);
        }
    };

    return {
        loading,
        error,
        users,
        getMe,
        getUsers,
    };
}