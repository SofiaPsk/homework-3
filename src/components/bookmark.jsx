import React from "react";

const BookMark = ({ status, onToggleBookMark, id }) => {
  return (
    <i
      onClick={() => onToggleBookMark(id)}
      className={`bi bi-bookmark${status === true ? "-fill" : ""}`}
    ></i>
  );
};

export default BookMark;
