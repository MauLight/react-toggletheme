import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

export default function Main() {

    const isDark = useContext(ThemeContext);

    const theme = isDark ? { 'backgroundColor': '#282c34' } : { 'backgroundColor': 'white', 'color': '#282c34' };

    const item = {
        name: "Ice cream",
        cal: 200
    }

    return (
        <main style={theme}>
            <h1 className="main--title">Fun facts about React</h1>
            <li>{`${item.name} - ${item.cal} cal`}</li>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}