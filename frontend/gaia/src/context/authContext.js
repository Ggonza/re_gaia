import React, {useState, createContext} from "react";
import {setToken} from "../api/token";
import {userUser} from "../hooks";

export const AuthContext = createContext({
    auth: undefined,
    login: () =>null,
    logout: () => null,
});

export function AuthUser(props){
    const {children} = props;
    const [auth, setAuth] = useState(undefined);
    const {getMe} = userUser();

    //LOGIN ---
    const login = async (token) =>{
        setToken(token);
        const me = await getMe(token);
        setAuth({token, me});
        console.log(me);
    };
    //Value Context ---
    const valueContext = {
        auth,
        login,
        logout:()=> console.log('Cerrando Sesion'),
    };

    return(
        <AuthContext.Provider value={valueContext}> {children} </AuthContext.Provider>
    );
}