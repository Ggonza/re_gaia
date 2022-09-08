import React from 'react';
import "./loginLayout.scss"

export function LoginLayout(props){
    const {children}=props;
    return(
        <div>
            {children}
        </div>
    );
}