import { useTheme } from "../themes/ThemeContext"

function Button() {
    const { theme, changeTheme } = useTheme()
    return (
        <>
            <button onClick={changeTheme} className={`${theme}Btn`}></button>
        </>
    )
}

export default Button