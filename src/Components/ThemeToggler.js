import React , {useContext} from "react"
import ThemeContext from "../Context/ThemeContext"

const ThemeToggler = ()=>{
    const [themeMode , setThemeMode] = useContext(ThemeContext)

    return(
        <div 
            onClick = {()=>{
            setThemeMode(themeMode === "light" ? "dark" : "light")
            }}
        >
            <p>Have Fun 
                <span>{themeMode === "light" ? " Switch to Dark Mode" : " Switch to Light Mode"}</span>
            </p>
        </div>
    )
}

export default ThemeToggler;