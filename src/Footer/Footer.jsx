import './footer.css'
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='Footer'  id='footer'>
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src="./src/assets/Images/logo.jpg" alt="" className="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, esse?</p>
                    <div className='footer-social-icons'>
                       <FaFacebook/>
                       <FaTwitter/>
                       <FaLinkedinIn/>
                    </div>
                </div>
                <div className="footer-content-center">
                   <h2>COMPANY</h2>
                   <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Delivery</li>
                      <li>Privacy policy</li>
                   </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                       <li>9787570598</li>
                       <li>contact@fastfood.com</li> 
                    </ul> 
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright 2025 &copy; Fastfood.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
