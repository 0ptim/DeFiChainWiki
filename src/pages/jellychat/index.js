import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";

const socket = io("https://jellychat.fly.dev");

export default function JellyChat() {
  const [userInput, setuserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    const storedUserToken = localStorage.getItem("user_token");

    if (storedUserToken) {
      setUserToken(storedUserToken);
    } else {
      const newUserToken = uuidv4();
      setUserToken(newUserToken);
      localStorage.setItem("user_token", newUserToken);
    }
  }, []);

  // Socket connection
  useEffect(() => {
    // Handle tool selection from jelly
    socket.on("tool_start", (data) => {
      console.log("Tool start: ", data.tool_name);
      setMessages((prevAnswers) => [
        ...prevAnswers,
        {
          text: data.tool_name,
          source: "tool",
        },
      ]);
    });

    // Handle jelly's final message
    socket.on("final_message", (data) => {
      console.log("Final message: ", data.message);
      setMessages((prevAnswers) => [
        ...prevAnswers,
        {
          text: data.message,
          source: "jelly",
        },
      ]);
      setLoading(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = async () => {
    if (!userInput) {
      setError(true);
      return;
    }

    // Add user's input to the list of messages
    setMessages((prevAnswers) => [
      ...prevAnswers,
      {
        text: userInput,
        source: "human",
      },
    ]);

    setLoading(true);
    setuserInput("");

    try {
      socket.emit("user_input", userInput, userToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout description="Ask questions about DeFiChain which JellyChat will answer for you.">
      <div className="transition-color mapBackground flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 md:py-28">
        <div className="relative flex max-w-2xl grow flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-2xl dark:bg-backgroundDark md:p-10">
          <BetaFlag />
          <DocsLink />
          <h1 className="mb-1">
            <Translate>JellyChat.Title</Translate>
          </h1>
          <p className="mb-2 text-center text-gray-600 dark:text-gray-200">
            <Translate>JellyChat.Instruction</Translate>
          </p>

          <div className="flex h-80 w-full flex-col gap-1 overflow-auto">
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
            {loading && (
              <div className="self-start rounded-lg bg-gray-50 px-4 shadow-md outline-none dark:bg-gray-800">
                <p className="mb-0 animate-pulse text-lg">...</p>
              </div>
            )}
          </div>

          <Input
            setError={setError}
            error={error}
            onSubmit={handleSubmit}
            question={userInput}
            setQuestion={setuserInput}
            inputRef={inputRef}
          />
          <SendButton disabled={loading} onSubmit={handleSubmit} />
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

function Message({ message }) {
  const { text, source } = message;

  return (
    <>
      {source === "human" && (
        <div className="self-end rounded-lg border-0 bg-gray-50 py-4 px-4 shadow-md outline-none dark:bg-gray-800">
          <p className="mb-0 text-lg">{text}</p>
        </div>
      )}

      {source === "tool" && (
        <div className="self-start rounded-lg border-0 bg-gray-50 py-2 px-4 shadow-md outline-none dark:bg-gray-800">
          <p className="text-md mb-0 italic">*{text}*</p>
        </div>
      )}

      {source === "jelly" && (
        <div className="self-start rounded-lg border-0 bg-gray-50 py-4 px-4 shadow-md outline-none dark:bg-gray-800">
          <p className="mb-0 text-lg">{text}</p>
        </div>
      )}
    </>
  );
}

function SendButton({ disabled, onSubmit }) {
  return (
    <button
      className="sendButton w-full cursor-pointer rounded-lg border-none p-4 text-lg text-white outline-none"
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
