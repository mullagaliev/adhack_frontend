import React, {Component} from 'react'
import {Menu, Segment, Feed, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class MenuExampleSecondaryPointing extends Component {
    state = {activeItem: 'home'};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <span className="HeadMenu">
                <Feed className="bg--accent">
                    <Feed.Event>
                        <Feed.Label image='https://pp.userapi.com/c836332/v836332808/38882/3NDxqzvatRo.jpg'/>
                        <Feed.Content>
                            <Feed.Date content='Online'/>
                            <Feed.Summary>
                                User1
                                <a href="/logout" className="logout">
                                    <Icon name="sign out"/>
                                </a>
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </span>
        )
    }
}