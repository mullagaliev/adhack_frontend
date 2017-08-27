import React, { Component } from 'react';

import { Button, Icon, Image as ImageComponent, Item, Label, Image  } from 'semantic-ui-react'

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
            <Item>
                <Item.Image 
                    src='http://68.media.tumblr.com/2612088fda38b4eeb28b0884fc59b145/tumblr_o8putdcByN1st5lhmo1_1280.jpg' />
                <Item.Content>
                    <Item.Header as='h2'>{this.state.data.name}</Item.Header>
                    <Item.Description><Icon name="line chart" size="large"/><b>Бюджет</b> 8600Р</Item.Description>
                    <Item.Description> <Icon name="money" size="large"/><b>CTR</b> 3,87%</Item.Description>
                    <br/>
                    <Item.Extra> 
                        <Label><Icon name="vk" color="blue"/>Vkontakte</Label>
                        <Label><Icon name="yahoo" color="red"/>Yandex</Label>
                        <Label><Icon name="facebook f" color="blue"/>Facebook</Label>
                    </Item.Extra>
                    <br/>
                    <Button primary fluid>Просмотреть</Button>

                </Item.Content>
            </Item>
        );
    }
}

export default Card;
