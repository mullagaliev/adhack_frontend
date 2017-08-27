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
                    <Menu.Item name='Главная' active={activeItem === 'Главная'} onClick={this.handleItemClick} />

                    <Menu.Item name='Новая компания' active={activeItem === 'Новая компания'} onClick={this.handleItemClick} />
                    <Menu.Item name='Вход' active={activeItem === 'Вход'} onClick={this.handleItemClick} />

                    <Menu.Menu position='right'>
                        <Menu.Item name='Выход' active={activeItem === 'Выход'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/' name="Главная" active={activeItem === 'Главная'}  >Главная</Link></li>
                            <li><Link to='/add_card' name='Новая компания' active={activeItem === 'Новая компания'} >Новая компания</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}