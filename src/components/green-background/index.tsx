import React from "react";
import style from "./style.module.css";

const GreenBackground = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className={style.background}>
            {children}
        </div>
    )
}
export {GreenBackground};