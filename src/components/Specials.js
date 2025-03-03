import Card from '../components/Card';
import GreekSalad from '../assets/greek salad.jpg';
import Bruschetta from '../assets/bruchetta.svg';
import LemonDessert from '../assets/lemon dessert.jpg';
import { Link } from 'react-router-dom';
function Specials() {
    return (
        <>
            {/* This weeks specials  */}
            <section className="specials">
                <div className="container">
                    <div className="specials-title">
                        <h2>This Weeks Specials!</h2>
                        <Link to={'/menu'} className="specials-button">
                            Online Menu
                        </Link>
                    </div>
                    <div className="specials-cards">
                        <Card>
                            <img src={GreekSalad} alt="Greek Salad dish" className="specials-image"></img>
                            <div className="specials-cards-content">
                                <div className="specials-card-title">
                                    <h3>Greek Salad</h3>
                                    <span>$12.99</span>
                                </div>
                                <p className="grow">The famous greek salad of crispy lettuce, peppers, olives and our Chicago Style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                <button className="orderDelivery">Order a Delivery</button>
                            </div>
                        </Card>
                        <Card>
                            <img src={Bruschetta} alt="Greek Salad dish" className="specials-image"></img>
                            <div className="specials-cards-content">
                                <div className="specials-card-title">
                                    <h3>Bruschetta</h3>
                                    <span>$10.99</span>
                                </div>
                                <p className="grow">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                                <button className="orderDelivery">Order a Delivery</button>
                            </div>
                        </Card>
                        <Card>
                            <img src={LemonDessert} alt="Greek Salad dish" className="specials-image"></img>
                            <div className="specials-cards-content">
                                <div className="specials-card-title">
                                    <h3>Lemon Dessert</h3>
                                    <span>$7.00</span>
                                </div>
                                <p className="grow">This comes straight from grandma's recipe book every last ingredient has been sourced and is as authentic as can be imagined</p>
                                <button className="orderDelivery">Order a Delivery</button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Specials;
