import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";

function UsersView() {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of Users</h2>
      {users.loading && <p>Loading...</p>}
      {users.error && <p>Error</p>}
      {users.data &&
        users.data.length > 0 &&
        users.data.map((user) => {
          return <ul key={user.id}>{user.name}</ul>;
        })}
    </div>
  );
}

export default UsersView;
