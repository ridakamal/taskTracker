import Button from "./Button"

const Tasks = ({tasks}) => {

    return (
        <div>
            {
                tasks.map( ({id, text, timing,reminder}) => (<h4 key={id} >{text} at {timing} <h6><Button color='green' text='Add'/>
                <Button text= 'Delete' color='orange'/></h6> </h4> ))
            }
        </div>
    )
}

export default Tasks


