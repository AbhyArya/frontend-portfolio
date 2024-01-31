import React, { useEffect, useState } from "react";
import styles from "./FirstSegment.module.css";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/imagelight.webp";
import { FaLinkedin } from "react-icons/fa";
import Header from "../Header/Header";

function FirstSegment() {
    const navigate = useNavigate();
    const goto = (path) => {
        navigate(path);
    };

    const items = [
        "Performance",
        "Scalability",
        "Security",
        "Latest Tech",
        "Best UI",
        "Modern UX",
    ];

    const [currentIdx, setCurrentIdx] = useState(0);
    const [currentText, setCurrentText] = useState([...items[currentIdx]]);
    const [width, setWidth] = useState(100);

    useEffect(() => {
        const timer = setTimeout(async () => {
            setWidth(0);
            setTimeout(() => {
                const nextIdx = (currentIdx + 1) % items.length;
                const nextText = [...items[nextIdx]];
                setCurrentText(nextText);
                setCurrentIdx(nextIdx);
                setWidth(100);
            }, 2000);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [currentIdx]);

    const socialMedias = [
        {
            link: "http://www.facebook.com",
            icon: FaLinkedin,
        },
        {
            link: "http://www.facebook.com",
            icon: FaLinkedin,
        },
        {
            link: "http://www.facebook.com",
            icon: FaLinkedin,
        },
    ];

    return (
        <section className={styles.section}>
            <Link to="/contact" style={{ textDecoration: "none" }}>
                <div className={styles.gap}>
                    <p>Like my work? Click here to connect with me!</p>
                </div>
            </Link>
            <Header />
            <div className={styles.pageScrollIndicator}></div>
            <div className={styles.heroMessageWrapper}>
                <h1>I'm a Web & Software Developer from India.</h1>
                <div className={styles.animatedTextWrapper}>
                    <p>Currently making softwares having</p>
                    <div className={styles.animatedTextInnerWrapper}>
                        <span
                            className={styles.typedOut}
                            style={{ width: `${width}%` }}
                        >
                            {currentText}
                        </span>
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <div
                        onClick={() => goto("/contact")}
                        className={styles.hireMe}
                    >
                        Hire Me
                    </div>
                    <div
                        onClick={() => goto("/resumes")}
                        className={styles.resumes}
                    >
                        Resume
                    </div>
                </div>
                <div className={styles.socialWrapper}>
                    {socialMedias.map((socialMedia, idx) => (
                        <a key={idx} href={socialMedia.link} target="__blank">
                            <div className={styles.socialMedia}>
                                <socialMedia.icon />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div className={styles.wave}></div>
            <div className={styles.imageWrapper}>
                <img src={image} alt="profile" />
            </div>
        </section>
    );
}

export default FirstSegment;
