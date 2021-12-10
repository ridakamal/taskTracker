import React from "react"
import { useState } from "react"
import Button from "./Button"

const Form = () => {
    const submit = (e) => {
        console.log(inputInitial);
    }
    const [inputInitial, setInput] = useState ({id:'', text:'', timing:'' }) 

    return (
        <form onSubmit= {submit}>
             <input placeholder="id" onChange={(event)=> setInput({...inputInitial, id:event.target.value})} />
             <input placeholder="text" onChange={(event)=> setInput({...inputInitial, text:event.target.value})} />
             <input placeholder="timing" onChange={(event)=> setInput({...inputInitial, timing:event.target.value })} />
            <Button type= "submit" value="ADD"> </Button>
        </form>
    )
}

export default Form
