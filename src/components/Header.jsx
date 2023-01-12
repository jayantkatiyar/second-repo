import Button from "./Button"
import Tasks from "./Tasks"

export default function Header({title, tasks}){

    const onClick = ()=>{
        console.log("Clicked");
    }

    return <div className="header">
        <h1>{title}</h1>
        <Button text="Add" onClick={onClick}/>
        <Tasks tasks={tasks}/>
    </div>
}

Header.defaultProps = {
    title : 'Task tracker'
}

//export default Header;