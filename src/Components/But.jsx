import React from 'react'

function But({ title, click }) {
    console.log("text" + title);

    return (
        <button onClick={click}>{title}</button>
    )
}

export default React.memo(But);