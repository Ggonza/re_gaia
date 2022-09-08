import React from 'react';
import "./chefLayout.scss"

export function ChefLayout(props){
    const {children} = props;
    return(
        <div>
           <p>CHEF LAYOUT</p>
            {children}
        </div>
    );
}