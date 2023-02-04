import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function QA() {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <h1>State: Ask a question</h1>
                <input className={styles.input} type="text" placeholder="How many DFI do I need to run my own masternode?" />
                <button className={styles.button}>Ask</button>
                <p className={styles.answer}>ANSWER</p>
            </div>
        </div>
    );
}