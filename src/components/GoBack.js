import BackArrow from "../assets/backArrow.png";
import { Link } from "react-router-dom";

function GoBack(props) {
  return (
    <Link
      className="back-button"
      title="Go back to previous page"
      to={props.page}
    >
      <img src={BackArrow} alt="back arrow button to previous page" />
    </Link>
  );
}

export default GoBack;
