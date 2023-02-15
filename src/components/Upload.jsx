import axios from "axios";
import { React, useState } from "react";


export default function Upload() {
    const [file, setFile] = useState([null])
    const [userId, setUserId] = useState([])

    const onInputChange = (e) => {
        setFile(e.target.files[0])
        setUserId()
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const responseData = await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`)  
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
                <textarea id="caption"></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}