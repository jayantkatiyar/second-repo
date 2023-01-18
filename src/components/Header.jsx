import Button from "./Button"
import Tasks from "./Tasks"
import React from "react";

export default function Header({title, tasks}){

    const onClick = ()=>{
        console.log("Clicked");
    }

    return <div className="header">
        <h1>{title}</h1>
        <Button text="Add" onClick={onClick}/>
    </div>
}

Header.defaultProps = {
    title : 'Task tracker'
}

//export default Header;