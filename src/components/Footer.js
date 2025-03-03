import Logo from '../assets/green logo 2.png';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="green and white logo"></img>
            <div>
                <h3 className="section-title">Doormat Navigation</h3>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link to={'/booking'}>Booking</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Order Online</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Login</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>
                        <Link to={'/'}>Address</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Phone Number</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Email</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li>
                        <Link to={'/'}>Social 1</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Social 2</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Social 3</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
