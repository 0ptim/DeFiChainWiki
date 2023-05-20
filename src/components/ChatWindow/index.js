import React, { useRef, useEffect } from "react";

const ChatWindow = ({ children, messagesLength }) => {
  const ChatWindowRef = useRef(null);

  useEffect(() => {
    const chatWindow = ChatWindowRef.current;
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messagesLength]);

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
