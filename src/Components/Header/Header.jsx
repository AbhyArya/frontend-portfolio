import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import links from "../../Constant/Links.js";
import { ReactComponent as DarkModeSvg } from "../../assets/darkMode.svg";
import { ReactComponent as LightModeSvg } from "../../assets/lightMode.svg";
import useActive from "../../Hooks/useActive.js";
import useDarkMode from "../../Hooks/useDarkMode.js";
import ProfileBtn from "./ProfileBtn.jsx";

function Header({ isOther }) {
    const [showMenu, setShowMenu] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const active = useActive();
    const toggleMenuBar = () => {
        document.body.classList.toggle("over-flow-hidden");
        setShowMenu(!showMenu);
    };
    return (
        <>
            <div
                className={styles.headingWrapper}
                style={{
                    background: isOther
                        ? "var(--color-background)"
                        : "transparent",
                    boxShadow: isOther ? "0 0 10px" : "",
                }}
            >
                <header className={styles.header}>
                    <nav
                        className={styles.nav}
                        style={{ padding: isOther ? "1rem 2rem" : "2rem 2rem" }}
                    >
                        <div className={styles.nameWrapper}>
                            <Link className={styles.nameAnchor} to="/">
                                <span>Abhi</span>
                                <div className={styles.logo}></div>
                                <span>Arya</span>
                            </Link>
                            <ul className={styles.upperUl}>
                                {links.map((link, idx) => (
                                    <li
                                        key={idx}
                                        className={`${styles.upperLi} ${
                                            idx === active ? styles.active : ""
                                        }`}
                                    >
                                        <Link
                                            to={link.route}
                                            className={styles.linkTag}
                                        >
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                                {active === 2 && <ProfileBtn />}
                            </ul>
                        </div>
                        <div
                            onClick={toggleDarkMode}
                            className={styles.toggleDarkMode}
                        >
                            <span>
                                {isDarkMode ? (
                                    <DarkModeSvg />
                                ) : (
                                    <LightModeSvg />
                                )}
                            </span>
                        </div>
                        <div
                            onClick={toggleMenuBar}
                            className={styles.hamburgerWrapper}
                        >
                            <div
                                className={`${
                                    showMenu
                                        ? styles.closeHamburger
                                        : styles.hamburger
                                }`}
                            ></div>
                        </div>
                    </nav>
                </header>
            </div>
            <div
                onClick={toggleMenuBar}
                className={`${styles.phoneModal} ${
                    !showMenu && styles.phoneModalShow
                }`}
            >
                <ul className={styles.upperUl_modal}>
                    <>
                        {links.map((link, idx) => (
                            <li
                                key={idx}
                                className={`${styles.upperLi_modal} ${
                                    idx === active
                                        ? isDarkMode
                                            ? styles.activeDark
                                            : styles.activeLight
                                        : ""
                                }`}
                            >
                                <Link
                                    to={link.route}
                                    className={styles.linkTag_modal}
                                >
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}

                        {active === 2 && (
                            <div className={`${styles.toggleDarkMode_modal}`}>
                                <ProfileBtn />
                            </div>
                        )}
                        <div
                            onClick={toggleDarkMode}
                            className={`${styles.toggleDarkMode_modal} ${
                                isDarkMode && styles.cutSvg
                            }`}
                        >
                            {isDarkMode ? <DarkModeSvg /> : <LightModeSvg />}
                        </div>
                    </>
                </ul>
            </div>
        </>
    );
}

export default Header;
