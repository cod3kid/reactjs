import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "./redux/actions/users";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  return (
    <div>
      {users.length &&
        users.map((user) => (
          <div
            key={user.id}
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <span>
              {" "}
              {user.firstName} {user.lastName}
            </span>
            <button
              style={{
                color: "red",
                border: "1px solid red",
                backgroundColor: "white",
              }}
              onClick={() => {}}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
