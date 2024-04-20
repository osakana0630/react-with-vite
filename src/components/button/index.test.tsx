import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("buttonタグがレンダリングされる", () => {
  render(<Button>テスト</Button>);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("theme props", () => {
  render(<Button theme="dark">テスト</Button>);
  expect(screen.getByRole("button")).toHaveAttribute("data-theme", "dark");
});

test("disabled props", () => {
  render(<Button disabled>テスト</Button>);
  expect(screen.getByRole("button")).toBeDisabled();
});

test("click event", async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>テスト</Button>);
  await user.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalled();
});
