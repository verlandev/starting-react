import React from "react"
import "./Header.scss";

const Header = () => {

    return (
        <header className="header">
            <nav className="nav">
                <ul className="ul">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Gallery</li>
                    <li>Exit</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header