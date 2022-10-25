import React, { useState } from "react";
import Auth from "../../components/Auth";
import { dataProps } from "../../types/authTypes";
import { observer } from "mobx-react-lite";
import authApi from "../../store/authApi";
import { useNavigate } from "react-router-dom";

const SignUp = observer(() => {
  const [value, setValue] = useState<dataProps>({ username: "", password: "" });
  const [error, setError] = useState<string>("");
  const { username, password } = value;
  const navigate = useNavigate();

  const handleRegister = () => {
    if(username.length && password.length){
      authApi.register(username, password);
      navigate("/login");
      setError('')
    }else{
      setError('Логин или пароль не могут быть пустыми')
    }
  };
  return (
    <Auth
      error={error}
      title={"Регистрация"}
      buttonName={"Зарегистрироваться"}
      onChange={setValue}
      onClick={handleRegister}
      data={value}
    />
  );
});

export default SignUp;
