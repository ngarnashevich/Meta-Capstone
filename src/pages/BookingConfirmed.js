import { Link } from "react-router-dom";
import JSConfetti from "js-confetti";

function BookingConfirmed() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();

  return (
    <div className="confirmation-container container">
      <h3>Table Reserved</h3>
      <p>
        Your table has been reserved successfully! You will receive an email
        confirmation with your reservation details shortly. We are excited to
        see you soon!
      </p>
      <Link to={"/"} className="custom-button final-confirmation">
        Book Another Table
      </Link>
    </div>
  );
}

export default BookingConfirmed;
