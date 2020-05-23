import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes/routes";

import "./assets/styles/index.scss";

const App = () => {
  const [token, setToken] = useState();

  useState(() => {
    const token = localStorage.getItem("snazzyAuthToken");
    if (token) setToken(token);
  });

  return <Routes token={token} saveToken={setToken} />;
};

export default App;
