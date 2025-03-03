import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";
import Chicago from "../components/Chicago";
import Header from "../components/Header"

function Homepage() {
  return (
    <>
      <main>
        <Header />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
    </>
  );
}

export default Homepage;
