import { React, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useSocket } from "../context/socket.context";

const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const { disconnectSocket } = useSocket();

  const logout = () => {
    localStorage.clear("access_token");
    setAuth({
        isAuthenticated: false,
        user: {
        email: "",
        name: "",
        },
    });
    disconnectSocket()
    navigate("/login");
  }

  return (
    <nav className="tyn-appbar">
      <div className="tyn-appbar-wrap">
        <div className="tyn-appbar-logo">
          <Link to={"/"} className="tyn-logo">
            <svg viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.2654 14.793C37.2654 14.793 45.0771 20.3653 41.9525 29.5311C41.9525 29.5311 41.3796 31.1976 39.0361 34.4264L42.4732 37.9677C42.4732 37.9677 43.3065 39.478 41.5879 39.9987H24.9229C24.9229 39.9987 19.611 40.155 14.8198 36.9782C14.8198 36.9782 12.1638 35.2076 9.76825 31.9787L18.6215 32.0308C18.6215 32.0308 24.298 31.9787 29.7662 28.3333C35.2344 24.6878 37.4217 18.6988 37.2654 14.793Z" fill="#60A5FA" />
              <path d="M34.5053 12.814C32.2659 1.04441 19.3506 0.0549276 19.3506 0.0549276C8.31004 -0.674164 3.31055 6.09597 3.31055 6.09597C-4.24076 15.2617 3.6751 23.6983 3.6751 23.6983C3.6751 23.6983 2.99808 24.6357 0.862884 26.5105C-1.27231 28.3854 1.22743 29.3748 1.22743 29.3748H17.3404C23.4543 28.7499 25.9124 27.3959 25.9124 27.3959C36.328 22.0318 34.5053 12.814 34.5053 12.814ZM19.9963 18.7301H9.16412C8.41419 18.7301 7.81009 18.126 7.81009 17.3761C7.81009 16.6261 8.41419 16.022 9.16412 16.022H19.9963C20.7463 16.022 21.3504 16.6261 21.3504 17.3761C21.3504 18.126 20.7358 18.7301 19.9963 18.7301ZM25.3708 13.314H9.12245C8.37253 13.314 7.76843 12.7099 7.76843 11.96C7.76843 11.21 8.37253 10.6059 9.12245 10.6059H25.3708C26.1207 10.6059 26.7248 11.21 26.7248 11.96C26.7248 12.7099 26.1103 13.314 25.3708 13.314Z" fill="#2563EB" />
            </svg>
          </Link>
        </div>{/* .tyn-appbar-logo */}
        <div className="tyn-appbar-content">
          <div className="tyn-appbar-nav tyn-appbar-nav-start"></div>
          <ul className="tyn-appbar-nav tyn-appbar-nav-end mt-2">
            <li className="tyn-appbar-item">
              <a className="tyn-appbar-link dropdown-toggle" data-bs-toggle="dropdown" href="#" data-bs-offset="0,10" data-bs-auto-close="outside">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-app-indicator" viewBox="0 0 16 16">
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                </svg>{/* app-indicator */}
                <span className="d-none">Notifications</span>
              </a>{/* .dropdown-toggle */}
              <div className="dropdown-menu dropdown-menu-rg dropdown-menu-end">
                <div className="dropdown-head">
                  <div className="title">
                    <h6>Notifications</h6>
                  </div>
                  <ul className="nav nav-tabs nav-tabs-line">
                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#notifications-unread" type="button"> Unread </button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#notifications-all" type="button"> All </button>
                    </li>
                  </ul>
                </div>{/* .dropdown-head */}
                <div className="dropdown-gap">
                  <ul className="tyn-media-list gap gap-3">
                    <li>
                      <div className="tyn-media-group">
                        <div className="tyn-media tyn-circle">
                          <img src="../../src/assets/images/avatar/1.jpg" alt="" />
                        </div>
                        <div className="tyn-media-col">
                          <div className="tyn-media-row">
                            <span className="message"><strong>Phillip Burke</strong> Sent message</span>
                          </div>
                          <div className="tyn-media-row">
                            <span className="meta">10 Hours ago</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>{/* .tyn-media-list */}
                </div>{/* .dropdown-gap */}
              </div>{/* .dropdown-menu */}
            </li>{/* .tyn-appbar-item */}
            <li className="tyn-appbar-item">
              <a className="d-inline-flex dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#" data-bs-offset="0,10">
                <div className="tyn-media tyn-size-lg tyn-circle">
                  <img src="../../src/assets/images/avatar/3.jpg" alt="" />
                </div>
              </a>{/* .dropdown-toggle */}
              <div className="dropdown-menu dropdown-menu-end">
                <div className="dropdown-gap">
                  <div className="tyn-media-group">
                    <div className="tyn-media tyn-size-lg">
                      <img src="../../src/assets/images/avatar/3.jpg" alt="" />
                    </div>
                    <div className="tyn-media-col">
                      <div className="tyn-media-row">
                        <h6 className="name">{auth?.user?.name}</h6>
                        <div className="indicator varified">
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>{/* check-circle-fill */}
                        </div>
                      </div>
                    </div>{/* .tyn-media-col */}
                  </div>{/* .tyn-media-group */}
                </div>{/* .dropdown-gap */}
                <div className="dropdown-gap">
                  <div className="d-flex gap gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                    </svg>{/* moon-fill */}
                    <div>
                      <h6>Darkmode</h6>
                      <ul className="d-flex align-items-center gap gap-3">
                        <li className="inline-flex">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="themeMode" id="dark" defaultValue="dark" />
                            <label className="form-check-label small" htmlFor="dark"> On </label>
                          </div>
                        </li>{/* li */}
                        <li className="inline-flex">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="themeMode" id="light" defaultValue="light" defaultChecked />
                            <label className="form-check-label small" htmlFor="light"> Off </label>
                          </div>
                        </li>{/* li */}
                      </ul>{/* ul */}
                    </div>{/* div */}
                  </div>{/* .d-flex */}
                </div>{/* .dropdown-gap */}
                <ul className="tyn-list-links">
                  <li>
                    <Link to={"/profile"} >
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                      </svg>{/* person */}
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li className="dropdown-divider" />{/* li */}
                  <li>
                    <button
                        onClick={logout}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-power" viewBox="0 0 16 16">
                        <path d="M7.5 1v7h1V1z" />
                        <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                      </svg>{/* power */}
                        <span>
                        Đăng xuất
                        </span>
                    </button>
                  </li>{/* li */}
                </ul>{/* .tyn-list-links */}
              </div>{/* .dropdown-menu */}
            </li>{/* .tyn-appbar-item */}
          </ul>{/* .tyn-appbar-nav */}
        </div>{/* .tyn-appbar-content */}
      </div>{/* .tyn-appbar-wrap */}
    </nav>
  );
}

export default Header;
