import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Form2 from "../Component/Form2";

describe("Form2 Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders all input fields", () => {
    render(
      <MemoryRouter>
        <Form2 />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/address line 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/address line 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/state/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/zip code/i)).toBeInTheDocument();
  });

  test("allows user to input text in fields", () => {
    render(
      <MemoryRouter>
        <Form2 />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/address line 1/i), {
      target: { value: "123 Main St" },
    });
    expect(screen.getByLabelText(/address line 1/i).value).toBe("123 Main St");

    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "New York" },
    });
    expect(screen.getByLabelText(/city/i).value).toBe("New York");

    fireEvent.change(screen.getByLabelText(/state/i), {
      target: { value: "NY" },
    });
    expect(screen.getByLabelText(/state/i).value).toBe("NY");

    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: "10001" },
    });
    expect(screen.getByLabelText(/zip code/i).value).toBe("10001");
  });

  test("validates required fields before proceeding", () => {
    render(
      <MemoryRouter>
        <Form2 />
      </MemoryRouter>
    );

    const nextButton = screen.getByRole("button", { name: /next/i });

    // Ensure "Next" button is disabled when required fields are empty
    expect(nextButton).toBeDisabled();

    // Fill only some fields
    fireEvent.change(screen.getByLabelText(/address line 1/i), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "New York" },
    });

    expect(nextButton).toBeDisabled();

    // Fill all required fields
    fireEvent.change(screen.getByLabelText(/state/i), {
      target: { value: "NY" },
    });
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: "10001" },
    });

    expect(nextButton).not.toBeDisabled();
  });

  test("navigates to previous step when 'Back' is clicked", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Form2 />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /back/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  test("navigates to next step when form is valid", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Form2 />
      </MemoryRouter>
    );

    // Fill all required fields
    fireEvent.change(screen.getByLabelText(/address line 1/i), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "New York" },
    });
    fireEvent.change(screen.getByLabelText(/state/i), {
      target: { value: "NY" },
    });
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: "10001" },
    });

    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/form3");
  });

  test("stores input values in localStorage", () => {
    render(
      <MemoryRouter>
        <Form2 />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/address line 1/i), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "New York" },
    });
    fireEvent.change(screen.getByLabelText(/state/i), {
      target: { value: "NY" },
    });
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: "10001" },
    });

    expect(localStorage.getItem("address1")).toBe("123 Main St");
    expect(localStorage.getItem("city")).toBe("New York");
    expect(localStorage.getItem("state")).toBe("NY");
    expect(localStorage.getItem("zip")).toBe("10001");
  });
});
