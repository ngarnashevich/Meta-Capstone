import Card from "./Card";
import Reviewer1 from "../assets/Guy 1.png";
import Reviewer2 from "../assets/Guy 2.png";
import Reviewer3 from "../assets/Woman 1.png";
import Reviewer4 from "../assets/Woman 2.png";
import Star from "../assets/Star.png";
import StarHalf from "../assets/Star Half.png";

function CustomersSay() {
  return (
    <section className="testimonial">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <Card>
          <div className="testimonial-card">
            <h3>Johnny</h3>
            <img src={Reviewer1} alt="reviewer profile 1"></img>
            <p className="grow">
              The food was very delicious and I will recommend it to all of my
              friends!
            </p>
            <h3>Rating</h3>
            <div className="star-container">
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
            </div>
          </div>
        </Card>
        <Card>
          <div className="testimonial-card">
            <h3>Sarah</h3>
            <img src={Reviewer3} alt="reviewer profile 2"></img>

            <p className="grow">
              I really liked the atmosphere and the waiters were very nice.
            </p>

            <h3>Rating</h3>
            <div className="star-container">
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
              <img src={StarHalf} alt="star rating" className="star"></img>
            </div>
          </div>
        </Card>
        <Card>
          <div className="testimonial-card">
            <h3>Alex</h3>
            <img src={Reviewer2} alt="reviewer profile 3"></img>
            <p className="grow">
              The selection was great and getting seated was very easy!
            </p>
            <h3>Rating</h3>
            <div className="star-container">
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
              <img src={StarHalf} alt="star rating" className="star"></img>
            </div>
          </div>
        </Card>

        <Card>
          <div className="testimonial-card">
            <h3>Marge</h3>
            <img src={Reviewer4} alt="reviewer profile 2"></img>
            <p className="grow">
              There was a great booking table service and the food was very
              tasty!
            </p>
            <h3>Rating</h3>
            <div className="star-container">
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
              <img src={Star} alt="star rating" className="star"></img>
              <img src={StarHalf} alt="star rating" className="star"></img>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default CustomersSay;
