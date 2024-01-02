import { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Footer2 from '../Footer2'
import axios from 'axios'



export default function Home( { handleLogout, currentUser, prof, setProf} ) {
    let [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`)
            console.log(response)
            setPosts(response.data)
            console.log(posts)
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getPosts()
    }, [])

    if (!currentUser) {
        return <Navigate to='/register' />
    }

    let generatePosts = posts.map((post, i) => {
        return (
            <div className='homepost' key={`post ${i}`}>
                <img className='homeImage' src={post.image} alt={post.caption}/>    
                <div className='postandcap'>
                    <p className='home-post-caption'>
                        <Link to={`/profile/${post.user.id}`} className='caplink'>{post.user.username}
                        </Link>
                        &nbsp;
                        &nbsp;
                        {post.caption}
                    </p>
                </div>
            </div>

        )
    })
    return (
        <div className='app'>
            <Header currentUser={currentUser} handleLogout={handleLogout} prof={prof} setProf={setProf} />
            <div className='home' style = {{backgroundColor: 'black', minHeight: '100vh'}}>
                {generatePosts}
            </div>
            <Footer />
            <Footer2 />
        </div>
        
    );
}