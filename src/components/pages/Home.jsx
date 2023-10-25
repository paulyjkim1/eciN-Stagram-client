import { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'



export default function Home( { handleLogout, currentUser, prof, setProf} ) {
    let [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`)
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
                <Link to={`/profile/${post.user.id}`}>
                <p className='poster'>By {post.user.username}</p>
                </Link>
                <p className='caption'>{post.caption}</p>
                <img className='homeImage' src={post.image} alt={post.caption}/>
            </div>

        )
    })
    return (
        <div className='app'>
            <Header currentUser={currentUser} handleLogout={handleLogout} prof={prof} setProf={setProf} />
        <div className='home'>
            {generatePosts}
        </div>
            <Footer />
        </div>
    );
}