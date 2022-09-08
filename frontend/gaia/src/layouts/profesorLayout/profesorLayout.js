import React from 'react';
import "./profesorStyles.scss"
export function ProfesorLayout(props){
    const {children} = props;
    return(
        <div>
            <p>layout Professor</p>
            {children}
        </div>
    );
}