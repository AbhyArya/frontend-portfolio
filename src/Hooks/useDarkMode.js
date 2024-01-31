import { useEffect, useState } from "react";

export default function useDarkMode(){
    const [isDarkMode, setIsDarkMode] = useState();
    useEffect(() => {
        const localStorageValue = localStorage.getItem("isDarkTheme");
        let isDarkTheme = localStorageValue === 'true';
        if(!localStorageValue){
            isDarkTheme = true;
        }        
        if (isDarkTheme) {
            document.body.classList.add("dark-mode");
        }
        setIsDarkMode(isDarkTheme);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("isDarkTheme", !isDarkMode);
    };

    return [isDarkMode, toggleDarkMode]
}