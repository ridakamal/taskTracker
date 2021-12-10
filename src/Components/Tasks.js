import Button from "./Button"

const Tasks = ({tasks}) => {

    return (
        <>
            {
                tasks.map( ({id, text, timing,reminder}) => (<div key={id} >{text} at {timing} <h6>
                <Button text= 'Delete' color='orange'/></h6> </div> ))
            }
        </>
    )
}

export default Tasks


