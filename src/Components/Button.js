
const Button = ({text, color}) => {
const onClick = (e) => {
console.log('this is my on click event from button');
}

    return (
     <button className='btn' 
            style= {{backgroundColor: color}} 
            onClick= {onClick}>  {text}  
    </button>
            )
                }

export default Button