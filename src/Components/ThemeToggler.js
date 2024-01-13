import react , {useContext} from "react"
import ThemeContext from "../context/ThemeContext"

const ThemeToggler = ()=>{
    const [themeMode , setThemeMode] = useContext(ThemeContext)

    return(
        <div onClick = {()=>{
            setThemeMode(themeMode === "lisght" ? "dark" : "light")
        }}>
            <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
        </div>
    )
}

export default ThemeToggler;