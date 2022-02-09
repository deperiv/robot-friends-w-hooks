import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid white', height: '70vh', borderRadius: '10px', width: '85%', margin: 'auto'}}>
            {props.children}
        </div>
    )
}

export default Scroll;
