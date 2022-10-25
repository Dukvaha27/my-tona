import React, { useState } from "react";
import Auth from "../../components/Auth";
import { dataProps } from "../../types/authTypes";
import authApi from "../../store/authApi";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const { username: name, password: pass } = authApi;
  const [value, setValue] = useState<dataProps>({ username: "", password: "" });
  const [error, setError] = useState<string>("");
  const { username, password } = value;

  const handleRegister = () => {
    const check = username === name && pass === password;
    const isEmptyFiled = username.length && password.length
    if (check && isEmptyFiled) {
      setError("");
      authApi.login(username, password);
      navigate('/')
    } else {
        setError('Неверный логин или пароль')
    }
  };
  return (
    <Auth
      error={error}
      title={"Вход"}
      buttonName={"Войти"}
      onClick={handleRegister}
      data={value}
      onChange={setValue}
    />
  );
};

export default SignIn;
