import { useTheme } from '../themes/ThemeContext'

function Profile() {
    const { theme } = useTheme()
    return (
        <>
            <h1>Perfil</h1>
            <div className='profile'>
                <div className='profile_pic'></div>
                <div className='info'>
                    <ul className={`${theme}Ul`}>
                        <li><span>Nombre:</span> mardelmir</li>
                        <li><span>Hobbies:</span> puzzles, escape rooms, acuarela</li>
                        <li><span>GitHub:</span><a href='https://github.com/mardelmir' target='_blank'> https://github.com/mardelmir</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Profile