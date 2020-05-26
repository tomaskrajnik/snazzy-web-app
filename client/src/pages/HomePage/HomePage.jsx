import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "./Homepage.scss";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import LoadingScreen from "../../components/common/LoadingScreen/LoadingScreen";
import SmallerScreen from "./components/SmallerScreen.";
import jwt from "jsonwebtoken";
import userService from "./../../services/userService";
import { useMediaQuery } from "react-responsive";

const HomePage = ({ token, removeToken }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const isTabletOrMobile = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1225px)" });

  useEffect(() => {
    async function getUser(id) {
      try {
        const response = (await userService(id, token)).data;
        setUser(response);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    if (token) {
      const userId = jwt.decode(token)._id;
      getUser(userId);
    }
  }, []);

  const handleLogOut = () => {
    removeToken(null);
    localStorage.clear();
  };
  if (!token) {
    return <Redirect to="/auth" />;
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="homepage">
          {isTabletOrMobile && (
            <SmallerScreen onLogOut={handleLogOut} user={user} />
          )}
          {isBigScreen && (
            <React.Fragment>
              <Sidebar />
              <Topbar onLogOut={handleLogOut} user={user} />
              <div className="homepage__content">
                <Dashboard></Dashboard>
              </div>

              <button>Log out</button>
            </React.Fragment>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default HomePage;
