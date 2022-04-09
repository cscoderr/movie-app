import React from "react";

const Header = () => {
    return (
        <>
            <header className="ht-header">
                <div className="container">
                    <nav className="navbar navbar-default navbar-custom">
                            <div className="navbar-header logo">
                                <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <div id="nav-icon1">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" width="119" height="58" /></a>
                            </div>
                    </nav>

                    <div className="top-search">
                        <input type="text" placeholder="Search for a movie" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;