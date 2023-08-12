import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("shows two input and a button", () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("click on add button and calls onUserAdd function", () => {
  const onUserAdd = jest.fn();
  render(<UserForm onUserAdd={onUserAdd} />);

  const nameInput = screen.getByRole("textbox", { name: /Name/ });
  const emailInput = screen.getByRole("textbox", { name: /Email/ });

  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("John Wick");

  user.click(emailInput);
  user.keyboard("johnwick@gmail.com");

  user.click(button);

  expect(onUserAdd).toHaveBeenCalled();
  expect(onUserAdd).toHaveBeenCalledWith({
    name: "John Wick",
    email: "johnwick@gmail.com",
  });
});
