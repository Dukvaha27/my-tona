import React, { FC, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import countriesApi from "../../store/countriesApi";
import { observer } from "mobx-react-lite";
import Pagination from "../Pagination";
import useSearch from "../../services/search-services";
import Row from "./Row";

const Table: FC = observer(() => {
  const { countries = [] } = countriesApi;
  const navigate = useNavigate();
  const [paginate, setPaginate] = useState({ start: 1, offset: 10 });

  const { value } = useSearch();

  useEffect(() => {
    countriesApi.fetchCountries();
  }, []);

  const handleNavigate = (name: string) => {
    navigate(`/country/${name}`);
  };

  const filterCountries = useMemo(() => {
    return countries.filter((name: string) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
  }, [countries, value]);

  return (
    <div className={"container-fluid"}>
      <table className={"table table-striped "}>
        <thead>
          <tr>
            <th scope={"col"}>name</th>
          </tr>
        </thead>
        <tbody>
          {filterCountries
            .map((el) => (
              <Row key={el} el={el} handleNavigate={handleNavigate} />
            ))
            .slice(paginate.start - 1, paginate.offset)}
        </tbody>
      </table>
      <Pagination
        limit={10}
        onChange={setPaginate}
        total={filterCountries.length}
      />
    </div>
  );
});

export default Table;
