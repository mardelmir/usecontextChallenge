import { useTheme } from "../themes/ThemeContext"

function Button() {
    const { theme, changeTheme } = useTheme()
    return (
        <>
            <p>{theme}</p>
            <button onClick={changeTheme}>Click me!</button>
        </>
    )
}

export default Button