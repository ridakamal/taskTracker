const tasks = 
[
    {
        id: 1,
        text: 'Doctors appoiment' ,
        timing: 'November 8th at 2:20 pm',
        reminder: true
    },
    {
        id: 2,
        text:'University lecture',
        timing: 'Everyday from 11-15',
        reminder: true
    },
    {
        id: 3,
        text: 'Dinner at home',
        timing: 'November 5th at 6pm',
        reminder: false
    }
]
const Tasks = () => {
    return (
        <div>
            {
                tasks.map( (variableIterator) => (<h5>{variableIterator.text} {variableIterator.timing} </h5>))
            }
        </div>
    )
}

export default Tasks
