import axios from "axios";
import { React, useState } from "react";


export default function Upload({currentUser}) {
    const [caption, setCaption] = useState({
        caption: ''
    })
    // console.log(caption)
    const [file, setFile] = useState([null])
    // console.log(file)

    const onInputChange = (e) => {
        setFile(e.target.files[0])
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        
        try {
            // console.log(currentUser)
            const formData = new FormData()
            formData.append('image', file)
            const options = {
                "Content-Type": "multipart/form-data"
            }
            const reqbody = { caption, userId: currentUser}
            const responseData = await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, reqbody, formData, options)  
            console.log(responseData)
            // after it posts close the modal 
            // code here later
        } catch (err) {
            console.warn(err)
        }
    }

    return (
        <form onSubmit={onSubmit} encType="multipart/form">
            <div>
                <label>Create new post</label>
                <input
                    type="file"
                    id="image"
                    onChange={e => setFile(e.target.files[0])}
                    />
                <textarea 
                    id="caption"
                    value={caption.caption}
                    onChange={e => setCaption({ ...caption, caption: e.target.value})}
                >
                </textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}