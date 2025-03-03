import * as Yup from "yup";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Formik } from "formik";
import Summary from "../components/Summary";
import GoBack from "../components/GoBack";

function ContactInformation(props) {
  const location = useLocation();
  const [occasion, setOccasion] = useState(false);
  const toggleOccasion = () => {
    setOccasion(!occasion);
  };
  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  useEffect(() => {
    //moves view to top of the page on new load
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <GoBack page={"/booking"} />
      <Formik
        initialValues={{ name: "", phone: "", email: "", comment: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .min(3, "Must be 3 characters or greater")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          comment: Yup.string().max(500, "Must be 500 characters or less"),
          phone: Yup.string()
            .required("Required")
            .matches(phoneRegExp, "Invalid phone number")
            .min(10, "Too short")
            .max(10, "Too long"),
        })}
        innerRef={formRef}
        onSubmit={values => {
          props.submitForm();
        }}
      >
        {formik => (
          <>
            <div className="contact-container container">
              <h3>Contact Information</h3>
              <hr></hr>
              <form onSubmit={formik.handleSubmit}>
                <div className="contact-inputs">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}

                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    {...formik.getFieldProps("phone")}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div>{formik.errors.phone}</div>
                  ) : null}

                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>

                <label htmlFor="occasion">Select an occasion</label>
                <div className="select">
                  <select
                    id="occasion"
                    name="occasion"
                    onClick={toggleOccasion}
                    className={occasion ? "active" : ""}
                  >
                    <option value="">Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="retirement">Retirement</option>
                    <option value="graduation">Graduation</option>
                  </select>
                  <span className={occasion ? "arrow active" : "arrow"}></span>
                </div>

                <h4>Additional Comments</h4>
                <textarea
                  id="comment"
                  {...formik.getFieldProps("comment")}
                ></textarea>
                {formik.touched.comment && formik.errors.comment ? (
                  <div>{formik.errors.comment}</div>
                ) : null}
              </form>
            </div>

            <Summary
              guests={location.state.guests}
              time={location.state.time}
              date={location.state.date}
              location={location.state.location}
            />

            <button
              className="custom-button reserve-button"
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </>
        )}
      </Formik>
    </>
  );
}

export default ContactInformation;
