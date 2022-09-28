import React from "react";
import cl from './MySpan.module.css'

const MySpan = ({children, ...props}) => {
    return(
        <span {...props} className={cl.mySpan}>
            {children}
        </span>
    );
};

export default MySpan