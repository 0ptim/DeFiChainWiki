import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

export default function JellyChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  const handleSubmit = async () => {
    if (!question) {
      setError(true);
      return;
    }

    setLoading(true);
    setAnswer("");
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
    <Layout description="Ask questions about DeFiChain which will get answered.">
      <div className="transition-color mapBackground flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 md:py-28">
        <div className="relative flex max-w-2xl grow flex-col items-center rounded-3xl bg-white p-6 shadow-2xl dark:bg-backgroundDark md:p-10">
          <h1>
            <Translate>JellyChat.Title</Translate>
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-200">
            <Translate>JellyChat.Instruction</Translate>
          </p>
          <Input
            setError={setError}
            error={error}
            onSubmit={handleSubmit}
            question={question}
            setQuestion={setQuestion}
            inputRef={inputRef}
          />
          <SendButton disabled={loading} onSubmit={handleSubmit} />
          <Answer answer={answer} loading={loading} />
          <BetaFlag />
          <DocsLink />
        </div>
      </div>
    </Layout>
  );
}

function Input({ error, onSubmit, question, setQuestion, inputRef, setError }) {
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="relative w-full">
      <input
        className={`w-full rounded-lg border border-transparent bg-elementLight p-5 pr-11 text-xl shadow-md outline-none hover:border-main-300 focus:border-main-700 dark:bg-elementDark  dark:hover:border-main-700 dark:focus:border-main-500 ${
          error ? "bg-main-100 dark:bg-main-900" : ""
        }`}
        type="text"
        placeholder={translate({ message: "JellyChat.Placeholder" })}
        value={question}
        ref={inputRef}
        onChange={(e) => {
          setQuestion(e.target.value);
          setError(false);
        }}
        onKeyDown={handleKeyDown}
      />
      <div className="absolute inset-y-0 right-3 flex items-center">
        {question && (
          <button
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-0 bg-gray-50 text-xs font-bold text-gray-600 dark:bg-gray-500 dark:text-gray-800"
            onClick={() => {
              setQuestion("");
              inputRef.current.focus();
            }}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
}

function Answer({ answer, loading }) {
  return (
    <div className="h-48 w-full overflow-auto rounded-lg border-0 bg-elementLight p-5 shadow-md outline-none dark:bg-elementDark">
      {!loading && <p className="text-lg">{answer}</p>}
      {loading && (
        <div>
          <div className="mb-2 h-4 w-64 animate-pulse rounded-md bg-gray-700"></div>
          <div className="mb-2 h-4 w-40 animate-pulse rounded-md bg-gray-700"></div>
          <div className="mb-2 h-4 w-48 animate-pulse rounded-md bg-gray-700"></div>
        </div>
      )}
    </div>
  );
}

function SendButton({ disabled, onSubmit }) {
  return (
    <button
      className="sendButton my-3 w-full cursor-pointer rounded-lg border-none p-4 text-lg text-white outline-none"
      onClick={onSubmit}
      disabled={disabled}
    >
      <Translate>JellyChat.Button</Translate>
    </button>
  );
}

function DocsLink() {
  return (
    <Link
      className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-elementLight font-bold shadow-md dark:bg-elementDark"
      to="/docs/auto/JellyChat"
    >
      ?
    </Link>
  );
}

function BetaFlag() {
  return (
    <div className="jellyChatBeta absolute top-0 left-0 h-32 w-32 drop-shadow-md"></div>
  );
}
