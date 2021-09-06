import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";

const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  onDelete,
  onToggleBookMark,
  status,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{profession.name}</td>
      <td>
        {qualities.map((qual) => (
          <Quality {...qual} />
        ))}
      </td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <BookMark status={status} onclick={() => onToggleBookMark(_id)} />
      </td>
      <td>
        <button className="badge bg-danger" onClick={() => onDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
};
export default User;
