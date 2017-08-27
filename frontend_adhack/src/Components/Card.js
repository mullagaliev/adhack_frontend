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
                <Item.Image size="tiny"
                    src='https://pp.userapi.com/c837335/v837335260/4e730/bAu3r30fDUA.jpg' />
                <Item.Content>
                    <Item.Header as='h2'>{this.state.data.name}</Item.Header>
                    <Item.Description><Icon name="line chart" size="large"/><b>Бюджет</b> 8600Р</Item.Description>
                    <Item.Description> <Icon name="money" size="large"/><b>CTR</b> 3,87%</Item.Description>



                </Item.Content>
                <Item.Extra>
                    <br/>
                    <Label><Icon name="vk" color="blue"/>Vkontakte</Label>
                    <Label><Icon name="facebook f" color="blue"/>Facebook</Label>
                </Item.Extra>
                <br/>
                <Button primary fluid>Просмотреть</Button>
            </Item>
        );
    }
}

export default Card;
