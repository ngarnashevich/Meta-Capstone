import MarioAdrianA from "../assets/Mario and Adrian A.jpg";
import MarioAdrianB from "../assets/Mario and Adrian b.jpg";
function Chicago() {
  return (
    <>
      {/* About */}
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials.
            </p>
          </div>
          <div className="about-images">
            <img
              src={MarioAdrianB}
              alt="Ownser Mario and Adrian preparing a dish"
            ></img>
            <img
              src={MarioAdrianA}
              alt="Owners Mario and Adrian Talking in a kitchen"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chicago;
