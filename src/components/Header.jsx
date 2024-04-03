import { Link, Outlet } from 'react-router-dom'
import Button from './Button'

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/myjob">My Job</Link>
            </nav>
            <Outlet />
            <Button />
        </header>
    )
}

export default Header