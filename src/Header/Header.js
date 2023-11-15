import React from "react";

function Header() {
    return (
        <header className="header">
            <h1>GROCERY LIST

            <a href="https://github.com/vsmsaladi/Grocerylist" className="github" target="_blank" rel="noreferrer" title="github!">
                <img
                    src="github.jpg"
                    alt="GITHUB REPO LINK"
                    className="header-image"
                    width={50}
                />
            </a>

            </h1>
        </header>
    )
}

export default Header;