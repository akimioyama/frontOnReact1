import React from "react";  
import cl from './MyLable.module.css'

const MyLable = ({children, ...props}) => {

    return(
        <label {...props} className={cl.MyLable}>
            {children}
        </label>
    );
};

export default MyLable