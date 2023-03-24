import React, { useContext, useState } from "react";
import Main from "./components/main";
import Navbar from "./components/navbar";
import { ThemeContext } from "./context/ThemeContext";


export default function App() {

  const [isDark, setIsDark] = useState(true);
  const [themeMode, setThemeMode] = useState();


  console.log(isDark);

  return (
    <ThemeContext.Provider value={isDark}>
      <div className="container">
        <Navbar />
        <button className="btn border rounded-0" onClick={() => setIsDark(!isDark)} >Toggle Theme</button>
        <Main />
      </div>
    </ThemeContext.Provider>

  )
}
