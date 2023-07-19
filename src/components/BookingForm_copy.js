import { useEffect, useState } from "react";

function BookingForm({availableTimes, dispatchAvailableTimes}) {

    const DateErrorMessage = () => {
        return(
            <p className="form-error">Please enter a valid date</p>
        );
    };
    const GuestsErrorMessage = () => {
        return(
            <p className="form-error">Please enter a number between 1 and 10</p>
        );
    };

    const [resDate, setResDate] = useState({
        value: "",
        isTouched: false,
    });
    const [resTime, setResTime] = useState({
        value: "17:00",
        isTouched: false,
    });
    const [guests, setGuests] = useState({
        value: "",
        isTouched: false,
    });
    const [occasion, setOccasion] = useState({
        value: "Birthday",
        isTouched: false,
    });

    const getIsFormValid = () => {
        return(
            resDate.isTouched &&
            resTime.isTouched &&
            guests.value > 0 && guests.value < 11 &&
            occasion.isTouched
        );
    };
    const clearForm = () => {
        setResDate({
            value: "",
            isTouched: false,
        });
        setResTime({
            value: "17:00",
            isTouched: false,
        });
        setGuests({
            value: "",
            isTouched: false,
        });
        setOccasion({
            value: "Birthday",
            isTouched: false,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Thank you for making a reservation with Little Lemon\n
            Date: ${resDate.value}
            Time: ${resTime.value}
            Number of guests: ${guests.value}
            Occasion: ${occasion.value}`
            )
        clearForm();

    }

    const availableTimesOptions = availableTimes.map((time) => {
        return(
            <option key={time} value={time} className="form-option time">{time}</option>
        )
    })

    return(
        <form onSubmit={handleSubmit} className="booking-form">
            <div className="label-input-container">
                <label htmlFor="resDate" className="form-label date lead-text">Choose date</label>
                <input
                    type="date"
                    id="resDate"
                    className="form-input date paragraph-text"
                    value={resDate.value}
                    onChange={e => setResDate({...resDate, value: e.target.value})}
                    onBlur={() => {
                        setResDate({...resDate, isTouched: true});
                        }}
                />
            </div>
            {resDate.isTouched && resDate.value.length < 8 ? (
                <DateErrorMessage />
            ) : null }
            <div className="label-input-container">
                <label htmlFor="resTime" className="form-label time lead-text">Choose time</label>
                <select
                    id="resTime"
                    className="form-input time paragraph-text"
                    values={resTime.value}
                    onChange={e => setResTime({...resTime, value: e.target.value})}
                    onBlur={() => {
                        setResTime({...resTime, isTouched: true})
                        }}
                >
                    {availableTimesOptions}
                </select>
            </div>
            {resTime.isTouched && resTime.value.length < 1 ? (
                <p>Please choose a time</p>
            ) : null }
            <div className="label-input-container">
                <label htmlFor="guests" className="form-label guests lead-text">Number of guests</label>
                <input
                    type="number"
                    value={guests.value}
                    onChange={e => setGuests({...guests, value: e.target.value})}
                    onBlur={() => {
                        setGuests({...guests, isTouched: true});
                        console.log(guests.isTouched);
                        }}
                    placeholder="2"
                    min="1"
                    max="10"
                    id="guests"
                    className="form-input guests paragraph-text"
                />
            </div>
            {guests.isTouched && (guests.value < 1 || guests.value > 10) ? (
                <GuestsErrorMessage />
            ) : null }
            <div className="label-input-container">
                <label htmlFor="occasion" className="form-label occasion lead-text">Occasion</label>
                <select
                    id="occasion"
                    className="form-input occasion paragraph-text"
                    values={occasion.value}
                    onChange={e => setOccasion({...occasion, value: e.target.value})}
                    onBlur={() => {
                        setOccasion({...occasion, isTouched: true})
                        }}
                >
                    <option className="form-option occasion">Birthday</option>
                    <option className="form-option occasion">Anniversary</option>
                </select>
            </div>
            <input type="submit" value="Make Your Rervation" className="form-submit btn" disabled={!getIsFormValid()} />
        </form>
    );
}

export default BookingForm;


