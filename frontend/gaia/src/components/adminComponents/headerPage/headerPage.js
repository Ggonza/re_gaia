import React from 'react';
import {Button} from "semantic-ui-react";
import "./headerPage.scss"


export function HeaderPage(props){
    const {title, btnTitle, btnClick} = props;
    return(
        <div className="header-page-admin">
           <h3>{title}</h3>
            <div>
                {btnTitle && (
                    <Button positive onClick={btnClick}>
                        {btnTitle}
                    </Button>
                )}
            </div>
        </div>
    );
}