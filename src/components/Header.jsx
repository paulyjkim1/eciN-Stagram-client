
export default function Header() {
    return(
        <div>

            <div className='header'>
                <p><span className="emoji">📸</span> <span className='words'>eciN-stagram</span></p>
                <p><span className="emoji">🏠</span> <span className='words'>Home</span></p>
                <p><span className="emoji">🔍</span> <span className='words'>Search</span></p>
                <p><span className="emoji">➕</span> <span className='words'>Create</span></p>
                <p><span className="emoji">🪞</span> <span className='words'>Profile</span></p>
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