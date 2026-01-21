import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NavBar from "./NavBar.jsx";
import { MemoryRouter } from "react-router-dom";

describe("NavBar", () => {
  
  it("it shows Item count in the Cart link", () => {
  render(
    <MemoryRouter>
  
    <NavBar cartItemsCount={5} />
    </MemoryRouter>
  )
    
    expect(
      screen.getByRole("link", { name: /Cart \(5\)/i })
    ).toBeInTheDocument();
  })
});
