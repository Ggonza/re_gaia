import React from 'react';
import { Navigation } from "./routes"
import{ToastContainer} from "react-toastify"
export default function App(){
    return(
        <div>
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
        </div>
    );
}