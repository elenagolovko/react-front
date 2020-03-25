import React from "react";
import "./UsersList.scss";

import Card from "../../../shared/components/UIElements/Card/Card";

import UserItem from "../UserItem/UserItem";

const UsersList = ({ list }) => (
  <div>
    {!list.length ? (
      <div className="center">
        <Card>
          <h2>No users found </h2>
        </Card>
      </div>
    ) : (
      <ul className="users-list">
        {list.map(user => (
          <UserItem key={user.id} {...user} placeCount={user.places.length} />
        ))}
      </ul>
    )}
  </div>
);

export default UsersList;
