import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import CartItem from "./CartItem.jsx";

describe("CartItem", () => {
  it("calls onRemoveItem when Remove button is clicked", async () => {
  const user = userEvent.setup();
  const handleRemoveItemMock = vi.fn();

  const mockItem = {
    title: "A Great Product",
    price: 29.99,
    imageUrl: "https://placehold.co/150",
    quantity: 2,
  };

  render(<CartItem item={mockItem} onRemoveItem={handleRemoveItemMock} />);
  expect(screen.getByText("A Great Product")).toBeInTheDocument();

  const removeButton = screen.getByRole("button", { name: /remove/i });
  await user.click(removeButton);

  expect(handleRemoveItemMock).toHaveBeenCalledTimes(1);
  expect(handleRemoveItemMock).toHaveBeenCalledWith(mockItem);
  })
});
