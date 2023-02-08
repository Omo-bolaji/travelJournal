import React from "react"
function Header () {
    return(
        <>
        <div className="containerOne">
        <img  className="img" src={require("../components/logo.png")} />
       <p className="containerText">my travel journal</p>
       </div>
        </>
    )
}
export default Header;