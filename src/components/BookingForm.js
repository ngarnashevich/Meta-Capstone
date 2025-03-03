import * as Yup from "yup";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
  const times = props.time;
  const navigate = useNavigate();
  const minDate = dayjs().format("MM/DD/YYYY");
  const formik = useFormik({
    initialValues: {
      date: dayjs().format("YYYY-MM-DD"),
      time: "",
      guests: 1,
      location: "",
    },
    validationSchema: Yup.object({
      guests: Yup.number()
        .integer()
        .min(1, "Minimum guests of 1")
        .required("Must enter number of guests"),
      date: Yup.date()
        .min(minDate, "Date must be today or later")
        .required("Required"),
      time: Yup.string()
        .required("Please select a time")
        .label("Choose a time"),
      location: Yup.string().required("Please select a table location"),
    }),
    onSubmit: values => {
      navigate("/contact-information", {
        state: {
          guests: values.guests,
          date: values.date,
          time: values.time,
          location: values.location,
        },
      });
    },
  });

  return (
    <>
      <h2>Reserve a Table</h2>
      <form className="bookingForm" onSubmit={formik.handleSubmit}>
        <div className="detail">
          <label htmlFor="date">Choose a date</label>
          <input
            type="date"
            id="date"
            //returns the selected date inside the dispatch parameter for the availableTimes useReducer
            onClick={e => props.dispatch({ type: e.target.value })}
            {...formik.getFieldProps("date")}
          />
          {formik.touched.date && formik.errors.date ? (
            <div aria-label="invalidDate">{formik.errors.date}</div>
          ) : null}
        </div>

        <div className="detail">
          <label htmlFor="time">Choose time</label>
          <select id="time" {...formik.getFieldProps("time")}>
            {/* populates select element with options from availableTimes state */}
            {times?.map((element, index) => {
              return <option key={index}>{element}</option>;
            })}
          </select>

          {formik.touched.time && formik.errors.time ? (
            <div data-testid="invalid-time">{formik.errors.time}</div>
          ) : null}
        </div>

        <div className="detail">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            min="1"
            id="guests"
            {...formik.getFieldProps("guests")}
          />
          {formik.touched.guests && formik.errors.guests ? (
            <div data-testid="invalid-guests">{formik.errors.guests}</div>
          ) : null}
        </div>

        <p>Table Selection: </p>
        <div
          role="group"
          aria-label="radio-group"
          className="table-location-options"
          {...formik.getFieldProps("location")}
        >
          <label className="table-radio" htmlFor="indoors">
            <input type="radio" id="indoors" name="location" value="Indoors" />
            Indoors
          </label>

          <label className="table-radio">
            <input
              type="radio"
              id="outdoors"
              name="location"
              value="Outdoors"
            />
            Outdoors
          </label>
        </div>
        {formik.touched.location && formik.errors.location ? (
          <div aria-label="invalidDate">{formik.errors.location}</div>
        ) : null}

        <button
          className="custom-button"
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Book a Table
        </button>
      </form>
    </>
  );
}

export default BookingForm;
