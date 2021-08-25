import React, { useState } from "react";
import api from "../API";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => userId !== user._id));
  };

  const renderPhrase = (number) => {
    number = users.length;
    if (number === 0 && <table>////</table>)
      return (
        <h2 className="badge bg-danger">Никто не тусанет с тобой сегодня</h2>
      );
    if (number === 1)
      return (
        <h2 className="badge bg-primary">{`${number} человек тусанет с тобой сегодня`}</h2>
      );
    if (number >= 2 && number <= 4)
      return (
        <h2 className="badge bg-primary">{`${number} человека тусанет с тобой сегодня`}</h2>
      );
    return (
      <h2 className="badge bg-primary">{`${number} человек тусанут с тобой сегодня`}</h2>
    );
  };

  return (
    <>
      <span>{renderPhrase()}</span>
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качества</th>
              <th>Профессия</th>
              <th>Встретился, раз</th>
              <th>Оценка</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.profession.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      className={"badge bg-" + quality.color}
                      key={quality._id}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="badge bg-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
