import React from 'react';
import "./adminLayout.scss"
export function AdminLayout(props){
    const {children} = props;
    return(
        <div>
            <p>
                AdminLayout
                {children}
            </p>
        </div>
    );
}