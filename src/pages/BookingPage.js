import Location from "../assets/Location.png";
import BookingForm from "../components/BookingForm";

function BookingPage(props) {
  return (
    <>
      <div className="reserve-header">
        <div className="reserve-overlay">
          <h1>Welcome to Little Lemon</h1>
        </div>
      </div>
      <section className="reserve-info">
        <h2>Hours and Location</h2>
        <div className="reserve-info-container">
          <div className="reserve-info-hours">
            <h3>Business Hours</h3>
            <ul>
              <li>
                <b>Mon</b> 10:00 am - 8:30 pm
              </li>
              <li>
                <b>Tues</b> 10:00 am - 8:30 pm
              </li>
              <li>
                <b>Wed</b> 10:00 am - 8:30 pm
              </li>
              <li>
                <b>Thurs</b> 10:00 am - 8:30 pm
              </li>
              <li>
                <b>Fri</b> 10:00 am - 8:30 pm
              </li>
              <li>
                <b>Sat</b> 8:30 am - 7:30 pm
              </li>
              <li>
                <b>Sun</b> 8:30 am - 7:30 pm
              </li>
            </ul>
          </div>
          <div>
            <img
              src={Location}
              alt="map location of restaurant "
              className="reserve-info-map"
            />
          </div>
        </div>
      </section>

      <section className="reserve-details">
        <BookingForm time={props.time} dispatch={props.dispatch} />
      </section>
    </>
  );
}

export default BookingPage;
