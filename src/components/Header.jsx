import { TiThMenu as Hamburger } from 'react-icons/ti'
import { BiSearchAlt as Search } from 'react-icons/bi'
import { AiFillHome as Home } from 'react-icons/ai'
import { AiOutlinePlusSquare as Plus } from 'react-icons/ai'

export default function Header() {
    return(
        <div>

            <div className='header'>
                <p className='header-logo'>eciN-stagram</p>
                <div className='header-icon'>eciN</div>
                <div className='header-links'>
                    <div className='link'><span className="emoji"><Home /></span> <div className='words'>Home</div></div>
                    <div className='link'><span className="emoji"><Search /></span> <div className='words'>Search</div></div>
                    <div className='link'><span className="emoji"><Plus /></span> <div className='words'>Create</div></div>
                    <div className='link'><span className="profile-circle"></span>  <div className='words'>Profile</div></div>
                </div>
                <div className='header-links hamburgerr'>
                    <div className='link'><span className='emoji'><Hamburger /></span> <span className='words'> More</span></div>
                </div>
            </div>
            <div className='header2'>
                <p className='logo'>eciN-stagram</p>
                <input 
                    className="search"
                    type='text'
                    placeholder='Search'
                />
                <p className='heart'>♡</p>
            </div>
        </div>
    )
}