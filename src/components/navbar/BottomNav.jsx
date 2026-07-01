import { NavLink } from "react-router-dom";
import "./BottomNav.css";
import useScrollBottom from "../../hooks/useScrollBottom";
import { Home, KeyRound, Image, User } from "lucide-react";
import FloatingSocial from "./FloatingSocial";


function BottomNav() {
    const hide = useScrollBottom();

    return (
        <>
            <FloatingSocial />

            <div className={`bottom-nav ${hide ? "hide" : ""}`}>

                <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    <Home size={22} strokeWidth={1.8} />
                    <span>HOME</span>
                </NavLink>

                <NavLink to="/rent" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    <KeyRound size={22} strokeWidth={1.8} />
                    <span>RENT</span>
                </NavLink>

                <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    <Image size={22} strokeWidth={1.8} />
                    <span>GALLERY</span>
                </NavLink>

                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    <User size={22} strokeWidth={1.8} />
                    <span>ABOUT</span>
                </NavLink>

            </div>
        </>

    );
}

export default BottomNav;