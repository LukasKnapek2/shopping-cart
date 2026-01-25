import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import CartPage from "./CartPage.tsx";

describe("CartPage", () => {
  const mockItems = [
    {
      title: "A Great Product",
      price: 29.99,
      imageUrl: "https://placehold.co/150",
      quantity: 2,
    },
  ];

  it("when remove button of an CartItem is clicked, removes the item from the cart", async () => {
  const user = userEvent.setup();
  const handleRemoveItemMock = vi.fn();

  render(<CartPage items={mockItems} onRemoveItem={handleRemoveItemMock} />);
  const removeButton = screen.getByRole("button", { name: /remove/i });
  await user.click(removeButton);
expect(handleRemoveItemMock).toHaveBeenCalledTimes(1);
expect(handleRemoveItemMock).toHaveBeenCalledWith(mockItems[0]);

  })
});
