import React, { useRef, useEffect } from "react";

const ChatWindow = ({ children, messagesLength, tokens }) => {
  const ChatWindowRef = useRef(null);

  // Scroll to bottom of chat window when new message is added or tokens are updated
  useEffect(() => {
    const chatWindow = ChatWindowRef.current;
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messagesLength, tokens]);

  return (
    <div
      ref={ChatWindowRef}
      className="flex h-96 w-full flex-col gap-2 overflow-auto pr-1"
    >
      {children}
    </div>
  );
};

export default ChatWindow;
