import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  const count = users.length;
  return (
    <>
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качества</th>
              <th>Профессия</th>
              <th>Встретился, раз</th>
              <th>Оценка</th>
              <th>Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Users;
