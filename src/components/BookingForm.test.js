import { render, screen, fireEvent } from "@testing-library/react";
import { initializeTimes } from "./Main.js";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./BookingForm";
import dayjs from "dayjs";

const MockBookingForm = () => {
  return (
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
};

test("validate if initializeTimes returns the correct expected value", () => {
  expect(initializeTimes.length).toBeGreaterThan(0);
});

test("Check if html form has the correct attributes", () => {
  render(<MockBookingForm />);
  const calendar = screen.getByLabelText(/date/);
  const guests = screen.getByLabelText(/Number of guests/);
  const submitButton = screen.getByRole("button");

  expect(guests.getAttribute("type")).toBe("number");
  expect(calendar.getAttribute("type")).toBe("date");
  expect(submitButton.getAttribute("type")).toBe("submit");
});

test("check valid calendar input", () => {
  render(<MockBookingForm />);
  let calendar = screen.getByLabelText(/date/);

  expect(calendar).toHaveDisplayValue(dayjs(new Date()).format("YYYY-MM-DD"));
});

test("invalid calendar inputs", async () => {
  render(<MockBookingForm />);
  let calendar = screen.getByLabelText(/date/);
  fireEvent.change(calendar, {
    target: {
      value: dayjs(new Date()).subtract(1, "day").format("YYYY-MM-DD"),
    },
  });
  expect(calendar).toHaveValue("2023-07-17");
});

test("check valid number of guests", () => {
  render(<MockBookingForm />);
  const guests = screen.getByLabelText(/Number of guests/);
  expect(parseInt(guests.value)).toBeGreaterThanOrEqual(1);
});

test("check invalid number of guests", () => {
  render(<MockBookingForm />);
  const guests = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guests, { target: { value: 0 } });
  expect(guests).toBeInvalid();
});

test("submit button should be disabled if an error is present", () => {
  render(<MockBookingForm />);
  const submitButton = screen.getByRole("button");

  expect(submitButton).toBeDisabled();
});
