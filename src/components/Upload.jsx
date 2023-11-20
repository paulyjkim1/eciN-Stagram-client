import axios from "axios";
import { React, useState } from "react";
import { useNavigate} from "react-router-dom";
import Modal from 'react-modal'


export default function Upload({currentUser, closeNewPost, prof, setProf, isOpen, style, ariaHideApp}) {
    const [formImg, setFormImg] = useState('')
    const [caption, setCaption] = useState('')
    let id = currentUser.id
    const navigate = useNavigate()
    // console.log(prof)
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            closeNewPost()
            // const postInfo = { caption, userId: currentUser}
            const formData = new FormData()
            formData.append('userId', currentUser.id)
            formData.append('image', formImg)
            formData.append('caption', caption)
            const options = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts/images`, formData, options)
            // // console.log(data)
            // navigate(`/profile/${currentUser?.id}`)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${currentUser?.id}`)
            console.log(response.data)
            setProf(response.data)
            navigate(`/profile/${id}`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeNewPost}
            style={style}
            ariaHideApp={ariaHideApp}
        >
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
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                >
                </textarea>
                <input type="submit" />
            </form>
            <button className='modal-close' onClick={() => closeNewPost()}>X</button>
        </Modal>
    )
}