import React, { ChangeEvent, FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSearch from "../../services/search-services";
import { observer } from "mobx-react-lite";
import authApi from "../../store/authApi";

const Header: FC = observer(() => {
  const navigate = useNavigate();
  const { value, setValue } = useSearch();

  const handleLogout = () => {
    authApi.logout();
    navigate("/register");
  };
  return (
    <div
      className={
        "w-100 bg-secondary p-3 d-flex justify-content-between align-items-center"
      }
    >
      <div className={"d-flex align-items-center"}>
        <Link to={"/"} className={"text-white"}>
          Главная
        </Link>
        <input
          placeholder={"Search..."}
          className={"ms-2"}
          type="text"
          value={value}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setValue(target.value)
          }
        />
      </div>
      <button
        className={"btn btn-outline-primary text-white"}
        onClick={handleLogout}
      >
        Выйти
      </button>
    </div>
  );
});

export default Header;
