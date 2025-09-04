import { useContext, useEffect } from "react";
import axios from "./util/axios.custiomize";
import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./components/context/auth.context";
import { Flex, Spin } from "antd";
import Modal from "./components/layout/Modal";
import { useSocket } from "./components/context/socket.context";

function App() {
  const {setAuth, appLoading, setAppLoading } = useContext(AuthContext);

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
    const fetchAccount = async () => {
      setAppLoading(true);
      const res = await axios.get(`/v1/api/account`);
      
      if (res && !res.message) {
        setAuth({
          isAuthenticated: true,
          user: {
            id: res._id,
            email: res.email,
            name: res.name,
          },
        });

        connectSocket(res._id);
      }
      setAppLoading(false);
    };

    fetchAccount();
  }, []);

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
          <Header />
          <div className="tyn-content tyn-content-full-height tyn-chat has-aside-base">
            <Outlet context={{ onlineUsers }}/>
          </div>
        </div>
        <Modal/>
      </div>}
    </>
  )
}

export default App
