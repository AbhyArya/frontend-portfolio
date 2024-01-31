import React from "react";
import { contacts } from "../../Data/AllData";
import styles from "./contact.module.css";

export default function ContactCards() {
    return (
        <div className={styles.cardWrapper}>
            {contacts.map((contact) => (
                <div className={styles.card}>
                    <a href={contact.href} target="__blank">
                        <span>
                            <contact.icon />
                        </span>
                        <h1>{contact.name}</h1>
                        <p>{contact.userName}</p>
                    </a>
                </div>
            ))}
        </div>
    );
}
