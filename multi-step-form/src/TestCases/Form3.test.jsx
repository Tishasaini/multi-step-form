import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Form3 from "../Component/Form3";

describe("Form3 Component", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem("name", "John Doe");
    localStorage.setItem("email", "john@example.com");
    localStorage.setItem("phone", "1234567890");
    localStorage.setItem("address1", "123 Main St");
    localStorage.setItem("address2", "Apt 4B");
    localStorage.setItem("city", "New York");
    localStorage.setItem("state", "NY");
    localStorage.setItem("zip", "10001");
  });

  test("renders confirmation page with stored data", () => {
    render(
      <MemoryRouter>
        <Form3 />
      </MemoryRouter>
    );

    expect(screen.getByText(/name:/i)).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText(/phone:/i)).toBeInTheDocument();
    expect(screen.getByText("1234567890")).toBeInTheDocument();
    expect(screen.getByText(/address line 1:/i)).toBeInTheDocument();
    expect(screen.getByText("123 Main St")).toBeInTheDocument();
    expect(screen.getByText(/city:/i)).toBeInTheDocument();
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText(/state:/i)).toBeInTheDocument();
    expect(screen.getByText("NY")).toBeInTheDocument();
    expect(screen.getByText(/zip code:/i)).toBeInTheDocument();
    expect(screen.getByText("10001")).toBeInTheDocument();
  });

  test("navigates back to Form2 when 'Back' button is clicked", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Form3 />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /back/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/form2");
  });

  test("saves form data and navigates to home on submit", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Form3 />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const savedData = JSON.parse(localStorage.getItem("formData"));

    expect(savedData.name).toBe("John Doe");
    expect(savedData.email).toBe("john@example.com");
    expect(savedData.phone).toBe("1234567890");
    expect(savedData.address1).toBe("123 Main St");
    expect(savedData.city).toBe("New York");
    expect(savedData.state).toBe("NY");
    expect(savedData.zip).toBe("10001");

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
