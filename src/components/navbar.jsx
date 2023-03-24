import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import image from '../images/react-icon-small.png'

export default function Navbar() {

    const isDark = useContext(ThemeContext);

    const theme = isDark ? { 'backgroundColor': '#282c34' } : { 'backgroundColor': 'white', 'color': '#282c34' };


    return (
        <nav style={theme}>
            <img src={image} className="nav--icon slideInRight" />
            <h3 className="nav--logo_text slideInLeft">ReactFacts</h3>
            <h4 className="nav--title" style={theme}>React Course - Project 1</h4>
        </nav>
    )
};