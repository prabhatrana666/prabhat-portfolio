import "./Navbar.css";
import { FiPhone } from "react-icons/fi";
import logo from "../../assets/logo.png";
import useScrollDirection from "../../hooks/useScrollDirection";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
    const hide = useScrollDirection();
    const navigate = useNavigate();

    return (
        <>

            <nav className={`navbar navbar-expand-lg custom-navbar fixed-top 
            ${hide ? "hide-navbar" : ""}`}>

                <div className="container-fluid px-4 helloiji">

                    <div className="d-flex align-items-center gap-3 main_class"
                        onClick={() => navigate("/")}
                    >
                        <div className="logo-circle">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className="logo-text">
                            <h2 className="text-uppercase">Hello<span className="text-white">11</span></h2>
                            <p>TAXI/CAB</p>
                        </div>
                    </div>

                    <div className="ms-auto call_button">
                        <a href="tel:8851522173" className="call-btn">
                            <FiPhone /> Call Now
                        </a>
                    </div>

                </div>
            </nav>
        </>

    );
}

export default Navbar;