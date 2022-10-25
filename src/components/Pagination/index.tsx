import React, { FC, useEffect, useMemo, useState } from "react";
import { paginationProps } from "../../types/paginationTypes";

const Pagination: FC<paginationProps> = ({
  limit,
  onChange,
  total,
}): JSX.Element => {
  const [listPages, setListPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const buttonsCount = Math.round(total / limit);
    const arr = Array.from(Array(buttonsCount).keys()).map((i) => i + 1);
    setListPages(arr);
  }, [total]);

  const pageCount = useMemo(() => Math.ceil(total / limit), [limit, total]);

  const onChangePage = (num: number) => {
    setCurrentPage(num);
    onChange({
      start: num * limit - (limit - 1),
      offset: num * limit,
    });
  };

  return (
    <div
      className={"d-flex justify-content-center align-items-center m-auto w-50"}
    >
      {currentPage > 1 && listPages.length > 2 && (
        <button
          className={`me-1 btn ${
            currentPage === 1 ? "btn-primary" : "btn-outline-secondary"
          }`}
          onClick={() => onChangePage(1)}
        >
          1
        </button>
      )}
      {currentPage > 3 && <span>➖</span>}
      {listPages
        .map((num) => (
          <button
            key={num}
            className={`mx-1 btn ${
              currentPage === num ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => onChangePage(num)}
          >
            {num}
          </button>
        ))
        .slice(
          currentPage - (currentPage <= 2 ? 1 : 2),
          currentPage + (currentPage <= 1 ? 2 : 1)
        )}
      {pageCount > currentPage + 2 && <span>➖</span>}

      {listPages.length > 1 && (
        <button
          className={`ms-1 btn ${
            currentPage === pageCount ? "btn-primary" : "btn-outline-secondary"
          }`}
          onClick={() => onChangePage(pageCount)}
        >
          {pageCount}
        </button>
      )}
    </div>
  );
};

export default Pagination;
