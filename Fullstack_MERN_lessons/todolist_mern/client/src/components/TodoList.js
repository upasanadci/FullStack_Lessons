import { useEffect, useState } from 'react'

function TodoList() {
    const [message, setMessage] = useState('')
    const [task, setTask] = useState()
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/todo/list')
            .then(response => response.json())
            .then(data => {
                setTodoList(data)
            })
    }, [message])
    
    const addTask = () => {
        fetch('http://localhost:5000/api/todo/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task: task,
                created_at: Date.now()
            })
        })
            .then(response => response.json())
            .then(successMessage => {
                setMessage(successMessage)
                // remove success message after 3 seconds
                setTimeout(() => {
                    setMessage('')
                }, 3000)
            })
    }
    return (
        <>
            <h1>TodoList App using MERN</h1>
            <h4 style={{ color: 'green' }}>{message}</h4>
            <input type="text" onChange={e => setTask(e.target.value)} />
            <button type="button" onClick={addTask}>
                +Add
            </button>
            {
                todoList && <ul>
                    {
                        todoList.map(item => {
                            return <li key={item._id}>
                                {item.task}, {item.created_at}
                            </li>
                        })
                    }
                </ul>
            }
        </>
    )
}

export default TodoList