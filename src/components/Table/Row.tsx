import React, { FC } from "react";
import { rowProps } from "../../types/rowTypes";

const Row: FC<rowProps> = ({ el, handleNavigate }) => {
  return (
    <tr key={el} onClick={() => handleNavigate(el.toString())} role={'button'}>
      <td>{el}</td>
    </tr>
  );
};

export default Row;
