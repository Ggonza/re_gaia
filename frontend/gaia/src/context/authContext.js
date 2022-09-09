import React, {useState, createContext, useEffect} from "react";
import {setToken, getToken, removeToken} from "../api/token";
import {userUser} from "../hooks";

export const AuthContext = createContext({
    auth: undefined,
    role: undefined,
    login: () =>null,
    logout: () => null,
});

export function AuthProvider(props){
    const {children} = props;
    const [auth, setAuth] = useState(undefined);
    const [role, setRole] = useState(undefined);
    const {getMe} = userUser();


    useEffect(() => {
    (async () => {
        const token = getToken();
        if (token) {
        const me = await getMe(token);
        setAuth({ token, me });
        } else {
        setAuth(null);
        }
    })();
}, [setAuth]);
    
    //LOGIN ---
    const login = async (token) =>{
        setToken(token);
        const me = await getMe(token);
        setAuth({token, me});
        setRole(me.role);
        console.log(me);
    };
    //LOGOUT ----
    const  logout = () =>{
        if(auth){
            removeToken();
            setAuth(null);
            window.location.href = '/';
        }
    };

    //Value Context ---
    const valueContext = {
        auth,
        role,
        login,
        logout,
    };

    if (auth === undefined) return null;

    return(
        <AuthContext.Provider value={valueContext}> {children} </AuthContext.Provider>
    );
}