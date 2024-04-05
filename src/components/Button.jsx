import { useTheme } from "../themes/ThemeContext"

function Button() {
    const { theme, changeTheme } = useTheme()
    return (
        <>
            <div className='btn-container'>
                <button onClick={changeTheme} className={`${theme}Btn`}></button>
            </div>
        </>
    )
}

export default Button