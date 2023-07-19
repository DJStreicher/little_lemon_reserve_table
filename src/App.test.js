import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import App from './App';

test("Renders the BookingForm heading", () => {
  const availableTimes = ["17:00", "18:00", "19:00"]
  render(<BookingForm availableTimes={availableTimes} />);
  const element = screen.getByText("Choose date");
  expect(element).toBeInTheDocument();
})

