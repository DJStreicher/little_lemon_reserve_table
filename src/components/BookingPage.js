import BookingForm from "./BookingForm";
import BookingForm_copy from "./BookingForm_copy";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./FetchAPI";

function BookingPage() {
    const initializeTimes = (availableTimes) => [
        ...availableTimes,
        ...fetchAPI(new Date()),
    ]
    const updateTimes = (availableTimes, date) => {
        const updatedTimes = fetchAPI(new Date(date))
        return updatedTimes.length !== 0 ? updatedTimes : availableTimes;
    }
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initializeTimes)

    return(
        <section className="booking-page-container">
            <BookingForm_copy
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}/>
        </section>
    )
}

export default BookingPage;