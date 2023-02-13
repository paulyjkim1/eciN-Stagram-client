import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import "../../css/Profile.css";
import axios from 'axios'

export default function Profile() {
    const [prof, setProf] = useState([])

    let { id } = useParams()

    // useEffect(()=> {
    //     const fetchProfile = async() => {
    //         try{
    //             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
    //             setProf(response.data)
                
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     fetchProfile()
    // },[id])
    // console.log(prof)


    // get post information from database and iterate over
    // const postComponent = post.map((post, i) => {
    //     return (
    //         <div className="post-row">
    //             <div className="post">
    //                 <a href="db_exampleimage.com"></a>
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <div className="body">
            {/* Hello from Profile */}
            <div className="user-info">
                {/* username */}
                <section>
                    <div className="user-setting">
                        <p>hello i am user</p>
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
                {/* {postComponent} */}
            </div>
        </div>
    );
}