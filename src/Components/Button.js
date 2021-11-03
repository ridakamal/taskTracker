
const Button = (props) => {
const onClick = (e) => {
console.log('this is my on click event from button');
}

    return (
     <button className='btn' 
            style= {{backgroundColor: props.color}} 
            onClick= {onClick}>  {props.text}  
    </button>
            )
                }

export default Button