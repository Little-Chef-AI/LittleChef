import React from "react";
import { ReactDOM } from "react-dom";


const Header = () => {
    return(
        <>
        <div className="header">
            <div className="logo">
                <img src={headerImg} alt="" />
            </div>
            <div className="Overlay"></div>
        </div>
        <div className="Content">
            <p></p>
        </div>
        </>
    )
}