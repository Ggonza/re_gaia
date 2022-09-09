import React from 'react';
import {Navigation} from "./routes"
import {ToastContainer} from "react-toastify"
import {AuthProvider} from "./context";

export default function App() {
    return (
        <AuthProvider>
            <Navigation/>

            <ToastContainer
                position="bottom-center"
                autoClose="5000"
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </AuthProvider>
    );
}