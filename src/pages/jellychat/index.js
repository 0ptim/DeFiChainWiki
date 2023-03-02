import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function JellyChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [selectedRating, setSelectedRating] = useState(null);

  const inputRef = useRef(null);

  const handleSubmit = async () => {
    if (!question) {
      setError(true);
      return;
    }

    setLoading(true);
    setAnswer("");
    setSelectedRating(null);
    setCurrentId(0);

    try {
      const response = await fetch("https://jellychat.fly.dev/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.response);
      setCurrentId(data.id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout description="Ask questions about DeFiChain which JellyChat will answer for you.">
      <div className="transition-color mapBackground flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 md:py-28">
        <div className="relative flex max-w-2xl grow flex-col items-center rounded-3xl bg-white p-6 shadow-2xl dark:bg-backgroundDark md:p-10">
          <BetaFlag />
          <DocsLink />
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
          <Answer
            answer={answer}
            loading={loading}
            currentId={currentId}
            selectedRating={selectedRating}
            ratingSelected={(rating) => setSelectedRating(rating)}
          />
          <Rating
            selectedRating={selectedRating}
            currentId={currentId}
            setSelectedRating={setSelectedRating}
          />
          {currentId !== 0 && (
            <p className="absolute bottom-2 m-auto my-0 text-sm text-gray-700">
              Question: {currentId}
            </p>
          )}
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
        className={`w-full rounded-lg border border-transparent bg-gray-50 p-5 pr-11 text-xl shadow-md outline-none hover:border-main-300 focus:border-main-700 dark:bg-gray-800  dark:hover:border-main-700 dark:focus:border-main-500 ${
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
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-0 bg-gray-100 text-xs font-bold text-gray-600 dark:bg-gray-500 dark:text-gray-800"
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

function Rating({ selectedRating, currentId, setSelectedRating }) {
  const handleRating = async (rating) => {
    if (currentId === 0) return;

    try {
      const response = await fetch("https://jellychat.fly.dev/rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: currentId, rating: rating }),
      });

      if (response.status === 200) {
        setSelectedRating(rating);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <div className="mt-2 flex gap-2">
        <div
          className={`flex grow items-center justify-center rounded-t-sm rounded-br-sm rounded-bl-lg bg-gray-50 py-4 text-2xl transition-colors dark:bg-gray-800 
    ${selectedRating === 0 ? "text-secondary-600" : ""}
    ${
      currentId === 0
        ? "text-gray-300"
        : "cursor-pointer shadow-lg hover:bg-gray-100 dark:hover:bg-gray-900"
    }`}
          onClick={() => handleRating(0)}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
        </div>
        <div
          className={`flex grow items-center justify-center rounded-t-sm rounded-bl-sm rounded-br-lg bg-gray-50 py-4 text-2xl transition-colors dark:bg-gray-800
    ${selectedRating === 1 ? "text-main-600" : ""}
    ${
      currentId === 0
        ? "text-gray-300"
        : "cursor-pointer shadow-lg hover:bg-gray-100 dark:hover:bg-gray-900"
    }`}
          onClick={() => handleRating(1)}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
      </div>
      {selectedRating === 0 && (
        <p className="mt-2 -mb-2 text-center text-lg">
          <Translate>JellyChat.HelpImprove1</Translate>
          <Link href="/docs/auto/JellyChat#how-can-i-help">
            <Translate>JellyChat.HelpImprove2</Translate>
          </Link>
          <Translate>JellyChat.HelpImprove3</Translate>
        </p>
      )}
    </div>
  );
}

function Answer({ answer, loading }) {
  return (
    <div className="w-full">
      <div className="h-48 overflow-auto rounded-t-lg rounded-b-sm border-0 bg-gray-50 p-5 shadow-md outline-none dark:bg-gray-800">
        {!loading && <p className="text-lg">{answer}</p>}
        {loading && (
          <div>
            <div className="mb-2 h-4 w-64 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700"></div>
            <div className="mb-2 h-4 w-40 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700"></div>
            <div className="mb-2 h-4 w-48 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700"></div>
          </div>
        )}
      </div>
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
      className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-50 font-bold shadow-md dark:bg-gray-800"
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
