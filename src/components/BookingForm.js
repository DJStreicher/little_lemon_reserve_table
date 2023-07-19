import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

function BookingForm({availableTimes, dispatchAvailableTimes}) {

    function reservationAlert(data) {
        alert(
            `Thank you for making a reservation with Little Lemon\n
            Date: ${data.resDate}
            Time: ${data.resTime}
            Number of guests: ${data.guests}
            Occasion: ${data.occasion}`
            )
    }

    const {values, handleChange, handleSubmit, errors, touched, resetForm} = useFormik({
        initialValues: {
            resDate: "",
            resTime: availableTimes[0],
            guests: "2",
            occasion: "Birthday",
        },
        onSubmit: (values) => {
            reservationAlert(values)
        },
        validationSchema: Yup.object({
            guests: Yup.number()
            .min(1, "can't be less than 1 person")
            .max(10, "can't be more than 10 people")
            .required("Required"),
            date: Yup.date()
            .max(new Date(), "Enter a valid date")
            .required("Required"),
            time: Yup.string()
            .required("Required"),
        }),
    })

    const availableTimesOptions = availableTimes.map((time) => {
        return(
            <option key={time} value={time} className="form-option time">{time}</option>
        )
    })

    return(
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit(e)}} className="booking-form">
            <div className="label-input-container">
                <label htmlFor="resDate" className="form-label date lead-text">Choose date</label>
                <input
                    type="date"
                    id="resDate"
                    className="form-input date paragraph-text"
                    value={values.resDate}
                    onChange={handleChange}
                />
            </div>
            {touched.resDate && errors.resDate ? (
                <p>{errors.resDate}</p>
            ) : null }
            <div className="label-input-container">
                <label htmlFor="resTime" className="form-label time lead-text">Choose time</label>
                <select
                    id="resTime"
                    className="form-input time paragraph-text"
                    values={values.resTime}
                    onChange={handleChange}
                >
                    {availableTimesOptions}
                </select>
            </div>
            {touched.resTime && errors.resTime ? (
                <p>{errors.resTime}</p>
            ) : null }
            <div className="label-input-container">
                <label htmlFor="guests" className="form-label guests lead-text">Number of guests</label>
                <input
                    type="number"
                    value={values.guests}
                    onChange={handleChange}
                    placeholder="2"
                    min="1"
                    max="10"
                    id="guests"
                    className="form-input guests paragraph-text"
                />
            </div>
            {touched.guests && errors.guests ? (
                <p>{errors.guests}</p>
            ) : null }
            <div className="label-input-container">
                <label htmlFor="occasion" className="form-label occasion lead-text">Occasion</label>
                <select
                    id="occasion"
                    className="form-input occasion paragraph-text"
                    values={values.occasion}
                    onChange={handleChange}
                >
                    <option className="form-option occasion">Birthday</option>
                    <option className="form-option occasion">Anniversary</option>
                </select>
            </div>
            <input type="submit" value="Make Your Rervation" className="form-submit btn"/>
        </form>
    );
}

export default BookingForm;


