import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Form1 from "../Component/Form1";


describe("Form1 Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders the form with all input fields", () => {
    render(
      <MemoryRouter>
        <Form1 />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
  });

  test("allows user to input text in fields", () => {
    render(
      <MemoryRouter>
        <Form1 />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    expect(emailInput.value).toBe("john@example.com");

    const phoneInput = screen.getByLabelText(/phone number/i);
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    expect(phoneInput.value).toBe("1234567890");
  });

  test("validates form fields before proceeding", () => {
    render(
      <MemoryRouter>
        <Form1 />
      </MemoryRouter>
    );

    const nextButton = screen.getByRole("button", { name: /next/i });

    // Click the next button without filling the form
    fireEvent.click(nextButton);

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
  });

  test("navigates to next step when form is valid", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Form1 />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    expect(mockNavigate).toHaveBeenCalledWith("/form2");
  });

  test("stores input values in localStorage", () => {
    render(
      <MemoryRouter>
        <Form1 />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    });

    expect(localStorage.getItem("name")).toBe("John Doe");
    expect(localStorage.getItem("email")).toBe("john@example.com");
    expect(localStorage.getItem("phone")).toBe("1234567890");
  });
});
