import { createContext, useContext, useRef, useState, useEffect } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const SocketProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socketRef = useRef(null);

  const connectSocket = (userId) => {
    if (!userId) return;

    // Nếu đã có socket cũ thì ngắt kết nối trước
    if (socketRef.current) {
      socketRef.current.disconnect();
    }

    // Tạo kết nối mới
    socketRef.current = io(BASE_URL, {
      query: { userId },
    });

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current.id);
    });

    socketRef.current.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    socketRef.current.on("getOnlineUsers", (userIds) => {
      setOnlineUsers(userIds);
    });
  };

  const disconnectSocket = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
  };

  // Cleanup khi SocketProvider bị unmount (hiếm khi xảy ra, nhưng an toàn)
  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket: socketRef.current, // chỉ expose socket instance
        connectSocket,
        disconnectSocket,
        onlineUsers,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
