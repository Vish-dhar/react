import React from "react";
const Button =({welcome, onclick}) => {
    return(
        <button className="greet" onClick={onclick}>
            {welcome}
        </button>
    )
}
export default Button;