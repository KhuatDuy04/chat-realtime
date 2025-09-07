import { useContext, useEffect, useState } from "react";
import axios from "./util/axios.custiomize";
import Header from "./components/layout/Header";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./components/context/auth.context";
import { Flex, Spin } from "antd";
import Modal from "./components/layout/Modal";
import { useSocket } from "./components/context/socket.context";

function App() {
  const {setAuth, appLoading, setAppLoading } = useContext(AuthContext);
  const [ notifications, setNotification ] = useState([]);
  const { socket } = useSocket();
  const [redirect, setRedirect] = useState(false);

  const { onlineUsers, connectSocket } = useSocket();

  console.log("onlineUsers:", onlineUsers);

  useEffect(() => {
    if (!window.TynAppLoaded) {
      window.TynAppLoaded = true;
      const loadScript = (src) =>
        new Promise((res, rej) => {
          const s = document.createElement("script");
          s.src = src;
          s.async = true;
          s.onload = res;
          s.onerror = rej;
          document.body.appendChild(s);
        });
      const loadBundles = async () => {
        await loadScript("/src/assets/js/bundle0ae1.js");
        await loadScript("/src/assets/js/app0ae1.js");
      };
      loadBundles();
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setRedirect(true);
      return;
    }

    const fetchAccount = async () => {
      setAppLoading(true);
      try {
        const res = await axios.get(`/v1/api/account`);

        if (res.message) {
          localStorage.removeItem("access_token");
          setRedirect(true);
          return;
        }

        setAuth({
          isAuthenticated: true,
          user: {
            _id: res._id,
            email: res.email,
            name: res.name,
            gender: res.gender,
            birthday: res.birthday,
            profilePic: res.profilePic,
          },
        });

        connectSocket(res._id);
      } catch (error) {
        console.error("Lấy thông tin đăng nhập thất bại:", error);
        localStorage.removeItem("access_token");
        setRedirect(true);
      } finally {
        setAppLoading(false);
      }
    };

    fetchAccount();
  }, []);


  useEffect(() => {
      if (!socket) return;

      socket.on("notification new", (noti) => {
          setNotification((prev) => [...prev, noti]);
      });

      return () => {
          socket.off("notification new");
      };
  }, [socket]);

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {appLoading === true ? 
      <div style={{ height: "100vh" }}>
        <Flex align="center" justify="center" style={{ height: "100%" }}>
          <Spin size="large" />
        </Flex>
      </div>
      : 
      <div className="tyn-body">
        <div className="tyn-root">
          <Header notifications={notifications} setNotification={setNotification}/>
          <div className="tyn-content tyn-content-full-height tyn-chat has-aside-base">
            <Outlet context={{ onlineUsers, setNotification }}/>
          </div>
        </div>
        <Modal/>
      </div>}
    </>
  )
}

export default App
