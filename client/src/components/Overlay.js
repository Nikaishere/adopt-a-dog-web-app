import React from "react";
//import "./components/Overlay.css";

const Overlay = ({children,close}) => {
    return <div className="overlay" onClick={close}> {children}</div>
};
<Overlay>
    <div></div>
</Overlay>


export default Overlay;