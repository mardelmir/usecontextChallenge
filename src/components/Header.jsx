import { Link } from 'react-router-dom'
import Button from './Button'
import { useTheme } from '../themes/ThemeContext'

function Header() {
    const { theme } = useTheme()
    return (
        <>
            <header className='header'>
                <nav className='nav'>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/myjob">My Job</Link>
                </nav>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={`parallax ${theme}Parallax`}>
                        <use xlinkHref="#wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                        <use xlinkHref="#wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#wave" x="48" y="6" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#wave" x="48" y="9" fill="rgba(255,255,255,0.9)" />
                    </g></svg>
                <Button />
            </header>
        </>
    )
}

export default Header