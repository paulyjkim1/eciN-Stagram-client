
export default function Header() {
    return(
        <div>

            <div className='header'>
                <p className='header-logo'>eciN-stagram</p>
                <div className='header-icon'>eciN</div>
                <div className='header-links'>
                    <div className='link'><span className="emoji">🏠</span> <span className='words'> Home</span></div>
                    <div className='link'><span className="emoji">🔍</span> <span className='words'> Search</span></div>
                    <div className='link'><span className="emoji"><span className='plus'>➕</span></span> <span className='words'> Create</span></div>
                    <div className='link'><span className="emoji"><span className='plus'>🪞</span></span> <span className='words'> Profile</span></div>
                </div>
                <div className='hamburgerr'>
                    <div>H</div>
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