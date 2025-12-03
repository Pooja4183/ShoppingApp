import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Create socket outside so it's accessible globally
const socket = io(process.env.REACT_APP_BACKEND_URL, {
  transports: ["websocket", "polling"],
  withCredentials: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});
// Make it globally accessible for debugging
window.socket = socket;

const Chat = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Connecting to:", process.env.REACT_APP_BACKEND_URL);

    // When connected
    socket.on("connect", () => {
      console.log("Connected to backend:", socket.id);
    });
    // When disconnected
    socket.on("disconnect", (reson) => {
      console.warn(" Disconnected from backend", reson);
    });
    //  If connection fails
    socket.on("connect_error", (err) => {
      console.error(" Connection error:", err.message);
    });
    // Listen for messages from backend
    socket.on("receivedMessage", (data) => {
      console.log("From backend:", data);
    });

    //  Cleanup
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");
      socket.off("receivedMessage");
    };
  }, []);

  // Send message to backend
  const sendMessage = () => {
    const data = {
      user: "Pooja",
      message: message,
    };
    if (message.trim()) {
      socket.emit("clientMessage", data);
      console.log("msg sent to backend server:", message);
      setMessage("");
    }
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "100px", marginBottom: "100px" }}
    >
      <h2>Socket.IO Test</h2>
      <input
        style={{
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "50px",
          marginRight: "10px",
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
      />
      <button onClick={sendMessage}>Send</button>
      <p>Check console for logs.</p>
    </div>
  );
};

export default Chat;
