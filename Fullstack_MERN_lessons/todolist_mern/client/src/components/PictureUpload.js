import { useState } from 'react'

function PictureUpload() {
    const [title, setTitle] = useState()
    const [picture, setPicture] = useState()

    const uploadPicture = () => {
        console.log(title, picture)
        const formData = new FormData()
        formData.append('title', title)
        formData.append('picture', picture)
        // Send datato backend for upload
        fetch('http://localhost:5000/api/picture/upload', {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(successMessage => {
                console.log(successMessage)
            })
    }
    return (
        <>
            <label>Title</label>
            <input type="text" onChange={e => setTitle(e.target.value)} />
            <label>Picture</label>
            <input type="file" onChange={e => setPicture(e.target.files[0])} />
            <button onClick={uploadPicture}>Upload</button>
        </>
    )
}

export default PictureUpload