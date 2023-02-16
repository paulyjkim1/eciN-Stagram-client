import axios from "axios";
import { React, useState } from "react";


export default function Upload({currentUser}) {
    const [formImg, setFormImg] = useState('')
    const [caption, setCaption] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // const postInfo = { caption, userId: currentUser}
            const formData = new FormData()
            formData.append('image', formImg)
            const options = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            console.log(formData)
            const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts/images`, formData, options)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            encType='multipart/form'
        >
            <div>
                <input
                    type='file'
                    id='image-upload'
                    onChange={e => setFormImg(e.target.files[0])}
                ></input>
            </div>
            <textarea 
                id="caption"
                value={caption.caption}
                onChange={e => setCaption({ ...caption, caption: e.target.value})}
            >
            </textarea>
            <input type="submit" />
        </form>
    )
}
// export default function Upload({currentUser}) {
//     const [caption, setCaption] = useState({
//         caption: ''
//     })
//     // console.log(caption)
//     const [file, setFile] = useState([null])

//     const onSubmit = async (e) => {
//         e.preventDefault()
        
//         try {
//             console.log(file)
//             // console.log(currentUser)
//             const formData = new FormData()
//             formData.append('image', file)
//             const options = {
//                 "Content-Type": "multipart/form-data"
//             }
//             console.log(formData)
//             const reqbody = { caption, userId: currentUser}
//             const {responseData} = await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts/images`, reqbody, formData, options)  
//             console.log(responseData)
//             // after it posts close the modal 
//             // code here later
//         } catch (err) {
//             console.warn(err)
//         }
//     }

//     return (
//         <form onSubmit={onSubmit} encType="multipart/form-data">
//             <div>
//                 <label>Create new post</label>
//                 <input
//                     type="file"
//                     id="image-upload"
//                     onChange={e => setFile(e.target.files[0])}
//                     />
//                 <textarea 
//                     id="caption"
//                     value={caption.caption}
//                     onChange={e => setCaption({ ...caption, caption: e.target.value})}
//                 >
//                 </textarea>
//             </div>
//             <button>Submit</button>
//         </form>
//     )
// }