import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import "../../css/Profile.css";
import axios from 'axios'
import Modal from 'react-modal'

let modalStyles = {
    content: {
        backgroundColor: 'rgba(0,0,0)',
        color: 'white',
        border: '1px solid rgb(11, 11, 11)',
        borderRadius: '10px',
        width: '80%',
        margin: 'auto',
        height: '80%',
    },
    overlay:{
        backgroundColor: 'rgba(255,255,255,.2)'
    }
}

export default function Profile() {
    const [prof, setProf] = useState([])
    const [postIsOpen, setPostIsOpen] = useState(false)
    const [details, setDetails] = useState([])


    let { id } = useParams()

    useEffect(()=> {
        const fetchProfile = async() => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
                setProf(response.data)
                
            }catch(err){
                console.log(err)
            }
        }
        fetchProfile()
    },[id])
    // console.log(prof.posts)

    function openPost(e) {
        setDetails(prof?.posts[e])
        setPostIsOpen(true)
    }
    function closePost(e) {
        setPostIsOpen(false)
    }
    

    // get post information from database and iterate over
    const postComponent = prof.posts?.map((post, i) => {
        return (
            <p onClick={() => openPost(i)} className='post' key={i}>{post.image}</p>
        )
    })
    console.log(postComponent)
    console.log(postComponent?.length)
  
    let grouped = [];
    let n = 3
    for (let i = 0, j = 0; i < postComponent?.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        grouped[j] = grouped[j] || [];
        grouped[j].push(postComponent[i])
    }
    
    // console.log(grouped)

    const groupComponent = grouped.map((group, i) => {
        return(
            <div className='post-row' key={i}>
                {group}
            </div>
        )
    })
    console.log(groupComponent)
    

    return (
        <div className="body">
            <Modal
                isOpen={postIsOpen}
                onRequestClose={closePost}
                style={modalStyles}
            >
                <div className='modal'>
                    <h1 className='modal-header'>{details?.image}</h1>
                    <p>{details?.caption}</p>
                    <form>
                        <input 
                            className='modal-input'
                            name='username'
                            placeholder='Username'
                        />
                    </form>
                    <button className='modal-close' onClick={() => closePost()}>X</button>
                </div>

            </Modal>
            {/* Hello from Profile */}
            <div className="user-info">
                {/* username */}
                <section>
                    <div className="user-setting">
                        <p>hello i am {prof.username}</p>
                        {/* conditional render the items below*/}
                        <button>Edit profile</button>
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                    <div className="user-post">
                        <p className="tab">0 posts</p>
                        <p className="tab">0 followers</p>
                        <p className="tab">0 following</p>
                    </div>
                </section>
            </div>
            <div className="post-nav">
                {/* list of post */}
                <p className="tab">Posts</p>
                <p className="tab">Reels</p>
                <p className="tab">Saved</p>
                <p className="tab">Tagged</p>
            </div>
            <div className="posts">
                {/* iterated posts from db */}
                {groupComponent}
            </div>
        </div>
    );
}