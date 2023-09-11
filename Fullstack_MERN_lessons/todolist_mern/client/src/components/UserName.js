import { useState } from 'react'

function UserName() {
    const [userName, setUserName] = useState('')
    const [message, setMessage] = useState('')
    // event handler function
    const sendDataToServer = () => {
        //alert(userName)
        fetch('http://localhost:5000/api/username', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: userName
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMessage(data)
            })
    }

    return (
        <>
            <h1>Add Username</h1>
            <h4 style={{ color: 'red' }}>{message}</h4>
            <input type="text" onChange={e => setUserName(e.target.value)} />
            <button type="button" onClick={sendDataToServer}>
                Save
            </button>
        </>
    )
}

export default UserName;