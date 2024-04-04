import { Link } from 'react-router-dom'
import Button from './Button'

function Header() {
    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/myjob">My Job</Link>
                </nav>
                <Button />
            </header>
        </>
    )
}

export default Header