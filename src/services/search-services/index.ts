import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import search from "../../store/search";

const useSearch = () => {
  const { value } = search;

  const setValue = useCallback((value: string) => {
    search.changeValue(value);
  }, []);

  return {
    value,
    setValue,
  };
};

export default useSearch;
