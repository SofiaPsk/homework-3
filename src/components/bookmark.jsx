import React from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    <i
      {...rest}
      className={`bi bi-bookmark${status === true ? "-fill" : ""}`}
    ></i>
  );
};

export default BookMark;
