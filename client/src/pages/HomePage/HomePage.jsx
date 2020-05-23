import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import "./Homepage.scss";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import LoadingScreen from "../../components/common/LoadingScreen/LoadingScreen";
import jwt from "jsonwebtoken";
import userService from "./../../services/userService";

const HomePage = ({token, removeToken}) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
          <Sidebar />
          <Topbar onLogOut={handleLogOut} user={user} />
          <div className="homepage__content">
            <Dashboard></Dashboard>
          </div>

          <button>Log out</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default HomePage;
