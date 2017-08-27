import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuExampleSecondaryPointing extends Component {
    state = { activeItem: 'home' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Menu pointing secondary className="HeadMenu">
                    <Menu.Item name='Вход' active={activeItem === 'Вход'} onClick={this.handleItemClick} />

                    <Menu.Menu position='right'>
                        <Menu.Item name='Выход' active={activeItem === 'Выход'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}