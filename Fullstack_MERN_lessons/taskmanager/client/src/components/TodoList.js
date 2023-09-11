import { useEffect, useState } from 'react'

function TodoList() {
    const [message, setMessage] = useState('')
    const [task, setTask] = useState()
    const [picture, setPicture] = useState()
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        fetch('/api/todo/list')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTodoList(data)
            })
    }, [message])

    const addTask = () => {
        const formData = new FormData();
        formData.append('file', picture)
        formData.append('task', task)
        console.log(picture)
        fetch('/api/todo/add', {
            method: 'POST',
            body: formData
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
            <h1>Task-Manager MERN</h1>
            <h4 style={{ color: 'green' }}>{message}</h4>
            <div>
                <label>Task title:</label>
                <input type="text" onChange={e => setTask(e.target.value)} />
            </div>
            <div>
                <label>Select a picture :</label>
                <input type="file" onChange={e => setPicture(e.target.files[0])} />
            </div>
            <button style={{ background: 'green', color: 'white' }} type="button" onClick={addTask}>
                +Add
            </button>
            {
                todoList && <ul>
                    {
                        todoList.map(item => {
                            return <li key={item._id} style={{ listStyle: 'none' }}>
                                <img src={`http://localhost:5000/images/${item.picture}`} style={{ width: '20px', height: '20px', borderRadius: '50%' }} />

                                <span>
                                    {item.task}, {item.created_at}
                                </span>
                            </li>
                        })
                    }
                </ul>
            }
        </>
    )
}

export default TodoList