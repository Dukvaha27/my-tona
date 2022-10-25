import React, { ChangeEvent } from "react";
import "./auth.css";
import { authProps } from "../../types/authTypes";

const Auth = ({ title, buttonName, data,error, onChange, onClick }: authProps) => {
  const { username, password } = data;

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...data, [ev.target.name]: ev.target.value });
  };
  return (
    <div className={"container-fluid"}>
      <h3 className={"text-center mt-5"}>{title}</h3>
      <div className={"main_block"}>
        <input
          name={'username'}
          type="text"
          className={"w-100 mb-1"}
          placeholder={'Введите имя'}
          value={username}
          onChange={(ev: ChangeEvent<HTMLInputElement>) => handleChange(ev)}
        />
        <input
          name={'password'}
          placeholder={"Введите пароль"}
          type={'password'}
          className={"w-100 mb-1"}
          value={password}
          onChange={(ev: ChangeEvent<HTMLInputElement>) => handleChange(ev)}
        />
        {error && <div className={'error'}>{error}</div>}
        <button className={"btn btn-primary w-100 mt-4"} onClick={onClick}>
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default Auth;
