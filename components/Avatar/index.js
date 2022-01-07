import React from "react";

export const index = ({ avatar, username }) => {
  return (
    <div>
      <img src={avatar} alt="avatar" width={100} />
      <strong>{username}</strong>
    </div>
  );
};
