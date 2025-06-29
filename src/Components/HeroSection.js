import React , {useContext} from "react"
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Colors"

const HeroSection = ()=>{
    const theme  = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];   // Properties of the color from Colors.js
    
    return (
        <div 
        style={{
            padding:"1",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:`center`
        }}>
            <h1>Context API theme toggler</h1>
            <p>This is a nice paragraph</p>
            <button 
                style = {{
                    backgroundColor : "#26ae60",
                    paddin : "10px 150px",
                    fontSize:"20px",
                    color:"#fff",
                    border:`${currentTheme.border}`
                }}>Click Me</button>
        </div>
    )
}

export default HeroSection;