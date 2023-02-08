import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

function QA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (!question) {
      setError(true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://chatdefichain.fly.dev/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.response.response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <h1>{loading ? "Generating answer" : "JellyChat"}</h1>
        <p>Ask any question about DeFiChain</p>
        <input
          className={`${styles.input} ${error ? styles.error : ""}`}
          type="text"
          placeholder="How many DFI do I need to run my own masternode?"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            setError(false);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className={styles.sendButton}
          onClick={handleSubmit}
          disabled={loading}
        >
          Send
        </button>
        <p className={styles.answer}>{answer}</p>
        <Link className={styles.helpButton} to="/docs/auto/JellyChat">
          ?
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout description="Ask questions about DeFiChain which will get answered.">
      <QA />
    </Layout>
  );
}
