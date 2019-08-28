import React, { Component } from 'react';
import './AppMenu.css';

class AppMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };

        this.gotoLink = this.gotoLink.bind(this);
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    gotoLink(link) {
        this.props.history.push(`${link}`);
    }

    render() {
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" onClick={() => this.gotoLink(link.link)}>{link.label}</a>
            ) : (
                <a className="menu__link" onClick={() => this.gotoLink(link.link)}>{link.label}</a>
            );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="menu">
                <h1 style={{
                }} className="menu__name">RMIT Social</h1>

                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AppMenu;