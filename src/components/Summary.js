import Calendar from "../assets/calendar.png";
import Clock from "../assets/clock.png";
import People from "../assets/group.png";
import Table from "../assets/dinner-table.png";

function Summary(props) {
  return (
    <div className="contact-container container summary">
      <h3>Summary</h3>
      <div className="summary-details">
        <p>
          <img src={Calendar} alt="calendar icon" />
          Date {props.date}
        </p>
        <hr></hr>
        <p>
          <img src={Clock} alt="clock icon" />
          Time {props.time}
        </p>
        <hr></hr>

        <p>
          <img src={People} alt="group of people icon" />
          Guests {props.guests}
        </p>
        <hr></hr>

        <p>
          <img src={Table} alt="Table Icon" />
          Location: {props.location}
        </p>
      </div>
    </div>
  );
}

export default Summary;
