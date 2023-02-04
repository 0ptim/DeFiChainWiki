import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function QA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <h1>State: {loading ? "Generating answer" : "Ask a question"}</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="How many DFI do I need to run my own masternode?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={handleSubmit}
          disabled={loading}
        >
          Ask
        </button>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}
