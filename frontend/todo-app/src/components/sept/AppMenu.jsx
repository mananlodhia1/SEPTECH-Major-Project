import React, { Component } from 'react';
import './AppMenu.css';

class AppMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            links: [
                { label: 'Home', link: '/index'},
                { label: 'Chat', link: '/chat'},
                { label: 'User Posts', link: '/posts'},
                { label: 'Profile', link: '/profile'},
                { label: 'Search', link: '/search'},
                { label: 'Logout', link: '/logout'}
            ]
        };

        this.gotoLink = this.gotoLink.bind(this);
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    gotoLink(link) {
        this.props.history.push(`${link.link}`);
    }

    render() {
        let linksMarkup = this.state.links.map((link) => {
            let linkMarkup = this.props.link == link.label ? (
                <a className="menu__link menu__link--active" onClick={() => this.gotoLink(link)}>{link.label}</a>
            ) : (
                <a className="menu__link" onClick={() => this.gotoLink(link)}>{link.label}</a>
            );

            return (
                <li key={link.label} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="menu">
                <h1 className="menu__name">RMIT <span> Social</span></h1>

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