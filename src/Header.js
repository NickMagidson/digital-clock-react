import React, { Component } from "react";

class Header extends Component {
    render() {
        return(
            <div className="header">
                <h2 className="title">Digital Clock</h2>
                <div className="button-div">
                    <button className="buttons">Skins</button>
                    <button className="buttons">Time Zones</button>
                </div>
            </div>
        )
    }
}

export default Header;