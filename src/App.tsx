import React, { FC, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import RoutesApp from "./routes";
import authApi from "./store/authApi";
import { observer } from "mobx-react-lite";

const App: FC = observer(() => {
  const navigate = useNavigate();

  const { token } = authApi;

  useEffect(() => {
    if (!token) {
      navigate("/register");
    }
  }, [token]);

  return (
    <>
      {token && <Header />}
      <RoutesApp />
    </>
  );
});

export default App;
