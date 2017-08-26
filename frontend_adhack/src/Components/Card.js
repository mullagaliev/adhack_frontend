import React, { Component } from 'react';

import { Button, Icon, Image as ImageComponent, Item, Label  } from 'semantic-ui-react'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data};
    }

    render() {
        let timestamp = this.state.data.create_time;
        let date = new Date();
        date.setTime(timestamp);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        let strDate = day + "." + month + "." + year;
        return (
            <Item className="CardItem">
                <Item.Image src='http://68.media.tumblr.com/2612088fda38b4eeb28b0884fc59b145/tumblr_o8putdcByN1st5lhmo1_1280.jpg' />
                <Item.Content>
                    <Item.Header as='a'>{this.state.data.name}</Item.Header>
                    <Item.Meta>
                        <span className='cinema'><b>Дата создания:</b> {strDate}</span>
                    </Item.Meta>
                    <Item.Description> <a><b>Arrested Development</b></a></Item.Description>
                    <Item.Extra> 
                        <Label icon='vk' content="Vkontakte"/>
                        <Label icon='yahoo' content="Yandex"/>
                        <Label icon='facebook f' content="Facebook"/>
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}

export default Card;
