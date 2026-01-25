import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "./ProductCard.tsx";

// The 'describe' block creates a test suite, grouping related tests for the ProductCard component.
describe("ProductCard", () => {
  // Define mock props that we can reuse across tests.
  const mockProduct = {
    title: "A Great Product",
    price: 29.99,
    imageUrl: "https://placehold.co/150",
  };

  // Test case 1: Does the component render with the correct information?
  it("renders product information correctly", () => {
    // Arrange: Render the component with the necessary props.
    // We pass a mock function for onAddToCart because it's a required prop.
    render(<ProductCard {...mockProduct} onAddToCart={() => {}} />);

    // Assert: Check if the elements are on the screen.
    // We use screen queries to find elements a user would see.
    expect(
      screen.getByRole("heading", { name: "A Great Product" })
    ).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "A Great Product" })
    ).toBeInTheDocument();
  });

  // Test case 2: Does the component behave correctly when a user interacts with it?
  it("calls onAddToCart with correct arguments when the add button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    const handleAddToCartMock = vi.fn(); // Create a mock function to track calls.

    render(<ProductCard {...mockProduct} onAddToCart={handleAddToCartMock} />);

    const quantityInput = screen.getByRole("spinbutton");
    const addButton = screen.getByRole("button", { name: "Add To Cart" });

    // Act: Simulate a user changing the quantity and then clicking the button.
    await user.clear(quantityInput);
    await user.type(quantityInput, "3");
    await user.click(addButton);

    // Assert: Check if our mock function was called correctly.
    expect(handleAddToCartMock).toHaveBeenCalledTimes(1);
    expect(handleAddToCartMock).toHaveBeenCalledWith(
      {
        title: "A Great Product",
        price: 29.99,
        imageUrl: "https://placehold.co/150",
      },
      3
    );
  });

  it("decrements the quantity when the '-' button is clicked, also i does not go below 1", async () => {
    
    
     const user = userEvent.setup();
    
    render(<ProductCard {...mockProduct} onAddToCart={() => {}} />);
    const decrementButton = screen.getByRole("button", { name: "-" });
    const input = screen.getByRole("spinbutton");
    await user.click(decrementButton);
    expect(input).toHaveValue(1);
    await user.click(decrementButton);
    await user.click(decrementButton);
    expect(input).toHaveValue(1);

   
  });
});
