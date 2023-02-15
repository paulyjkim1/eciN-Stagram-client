import axios from "axios";
import { React, useState } from "react";


export default function Upload(props) {
    const [caption, setCaption] = useState({
        caption: ''
    })
    console.log(caption)
    const [file, setFile] = useState([null])
    // console.log(file)

    const onInputChange = (e) => {
        setFile(e.target.files[0])
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        
        try {
            console.log(props.currentUser.id)
            const reqbody = { caption, file, userId: props.currentUser }
            const responseData = await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, reqbody)  
            console.log(responseData)
            // after it posts close the modal 
            // code here later
        } catch (err) {
            console.warn(err)
        }
    }

    return (
        <form onSubmit={onSubmit} encType="multipart/form-data">
            <div>
                <label>Create new post</label>
                <input
                    type="file"
                    id="image"
                    onChange={onInputChange}
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