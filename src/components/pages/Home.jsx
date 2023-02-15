import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'


export default function Home( { currentUser } ) {

    if (!currentUser) {
        return <Navigate to='/register' />
    }
    // let csrftoken = Cookies.get('csrftoken')
    // console.log(csrftoken)
    return (
        <div className='home'>
            <h1></h1>
        </div>
    );
}