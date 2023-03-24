import React, { useState } from "react";
import Main from "./components/main";
import Navbar from "./components/navbar";
import { ThemeContext } from "./context/ThemeContext";


export default function App() {

  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={isDark}>
      <div className="container">
        <Navbar />
        <button className="btn rounded-0 toggle-btn" onClick={() => setIsDark(!isDark)} >Theme</button>
        <Main />
      </div>
    </ThemeContext.Provider>

  )
}
