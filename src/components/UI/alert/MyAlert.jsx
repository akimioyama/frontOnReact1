import React, { useState } from "react";
import cl from "./MyAlert.module.css";
import Alert from "@mui/material/Alert";

const MyAlert = ({ children,severity, close, hidden, ...props }) => {
    const xxx = (e) => {
        close(true)
    }
  return (
    <div className="qwe" hidden={hidden}>
      <Alert severity={severity} onClose={xxx}>
        {children}
      </Alert>
    </div>
  );
};

export default MyAlert;
