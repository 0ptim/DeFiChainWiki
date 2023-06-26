import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import ChatWindow from "../../components/ChatWindow";

const backendUrl = "https://jellychat.fly.dev";
const socket = io(backendUrl);

export default function JellyChat() {
  const [userInput, setuserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [loadHistory, setLoadHistory] = useState(false);
  const [loadHistoryError, setLoadHistoryError] = useState(false);

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

  useEffect(() => {
    if (!userToken) return; // Do nothing if userToken is empty

    console.log("Fetching chat history...");
    console.log("User token: ", userToken);

    const fetchChatHistory = async () => {
      try {
        setLoadHistory(true);
        const response = await fetch(`${backendUrl}/history`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_token: userToken }),
        });

        if (!response.ok) {
          console.error(
            "Failed to fetch chat history. Status code: ",
            response.status
          );
          setLoadHistoryError(true);
        } else {
          const data = await response.json();
          console.log("Chat history: ", data);
          // Update your state with the fetched chat history
          setMessages(data);
        }
      } catch (error) {
        console.error("Failed to fetch chat history.", error);
        setLoadHistoryError(true);
      }
      setLoadHistory(false);
    };

    // Call the fetchChatHistory function when the userToken is set
    fetchChatHistory();
  }, [userToken]);

  // Socket connection
  useEffect(() => {
    // Handle tool selection from jelly
    socket.on("tool_start", (data) => {
      console.log("Tool start: ", data.tool_name);
      setMessages((prevAnswers) => [
        ...prevAnswers,
        {
          message_type: "tool",
          content: data.tool_name,
        },
      ]);
    });

    // Handle jelly's final message
    socket.on("final_message", (data) => {
      console.log("Final message: ", data.message);
      setMessages((prevAnswers) => [
        ...prevAnswers,
        {
          message_type: "jelly",
          content: data.message,
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
        message_type: "human",
        content: userInput,
      },
    ]);

    setLoading(true);
    setuserInput("");

    try {
      socket.emit("user_message", userToken, userInput);
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
          <p className="mx-8 mb-2 text-center text-gray-600 dark:text-gray-200">
            <Translate>JellyChat.Instruction</Translate>
          </p>

          <ChatWindow messagesLength={messages.length}>
            {loadHistoryError ? (
              <ErrorBanner
                onRetry={() => {
                  window.location.reload();
                }}
              />
            ) : null}
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
            {loading && (
              <div className="self-start rounded-lg bg-gray-50 px-4 shadow-md outline-none dark:bg-gray-800">
                <p className="mb-0 animate-pulse text-lg">...</p>
              </div>
            )}
            {loadHistory && <SkeletonPlaceholder></SkeletonPlaceholder>}
          </ChatWindow>

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
  const { content, message_type } = message;

  return (
    <>
      {message_type === "human" && (
        <div className="chatbubble_user max-w-md self-end whitespace-pre-line rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800">
          <p className="mb-0 text-lg">{content}</p>
        </div>
      )}

      {message_type === "tool" && (
        <div className="chatbubble_tool max-w-md self-start whitespace-pre-line rounded-lg border-0 bg-gray-50 px-4 py-2 shadow-md outline-none dark:bg-gray-800">
          <p className="text-md mb-0 text-gray-700 dark:text-gray-300">
            *{content}*
          </p>
        </div>
      )}

      {message_type === "jelly" && (
        <div className="chatbubble_jelly max-w-md self-start whitespace-pre-line rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800">
          <p className="mb-0 text-lg">{content}</p>
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
      className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-50 font-bold shadow-md dark:bg-gray-800"
      to="/docs/auto/JellyChat"
    >
      ?
    </Link>
  );
}

function BetaFlag() {
  return (
    <div className="jellyChatBeta absolute left-0 top-0 h-32 w-32 drop-shadow-md"></div>
  );
}

function SkeletonPlaceholder() {
  return (
    <>
      <div className="chatbubble_user max-w-md animate-pulse self-end rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800">
        <p className="text-md mb-0 text-transparent dark:text-transparent">
          Hey, I'm Bob.
        </p>
      </div>
      <div className="chatbubble_tool animate-pulse self-start rounded-lg border-0 bg-gray-50 px-4 py-2 shadow-md outline-none dark:bg-gray-800">
        <p className="text-md mb-0 text-transparent dark:text-transparent">
          This is a tool.
        </p>
      </div>
      <div className="chatbubble_jelly animate-pulse self-start rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800">
        <p className="text-md mb-0 text-transparent dark:text-transparent">
          Hello Bob, I'm Jelly.
        </p>
      </div>
      <div className="chatbubble_user max-w-md animate-pulse self-end rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800">
        <p className="text-md mb-0 text-transparent dark:text-transparent">
          Hey, I'm Bob. And you are Jelly.
        </p>
      </div>
      <div className="chatbubble_jelly animate-pulse self-start rounded-lg border-0 bg-gray-50 px-4 py-4 shadow-md outline-none dark:bg-gray-800">
        <p className="text-md mb-0 text-transparent dark:text-transparent">
          True! True! True! True! True! True! True! True!
        </p>
      </div>
    </>
  );
}

function ErrorBanner({ onRetry }) {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <div className="flex flex-col items-center rounded-md bg-slate-100 p-6 dark:bg-slate-600">
        <p className="text-center text-lg">
          <Translate>JellyChat.Error</Translate>
        </p>
        <button
          className="cursor-pointer rounded-md border-none bg-slate-300 p-4 text-base transition-colors hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-800"
          onClick={onRetry}
        >
          <Translate>JellyChat.Retry</Translate>
        </button>
      </div>
    </div>
  );
}
