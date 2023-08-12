import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "./UserList";

test("render one row per user", () => {
  const users = [
    { name: "John Wick", email: "johnwick@gmail.com" },
    { name: "Itachi Uchiha", email: "itachi@gmail.com" },
  ];
  render(<UserList users={users} />);
  // commented ones are for querySelector approach
  //   const { container } = render(<UserList users={users} />);

  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  //   const rows = container.querySelectorAll("tbody tr");

  expect(rows).toHaveLength(2);
});

// test("click on add button and calls onUserAdd function", () => {});
