import React, { Component } from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
import  Card from './Card';
import  AddCard from './AddCard';
var nanoid = require('nanoid');

var jsonItem = {"id":1007813523,
    "type":"normal",
    "name":"Бой в Hookah PACMAN",
    "status":1,
    "day_limit":"0",
    "all_limit":"0",
    "start_time":"0",
    "stop_time":"1503802800",
    "create_time":"1503678837",
    "update_time":"1503687731"};

var data = [jsonItem];

class ListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {data: data};
        this.onLoad();
    }
    onLoad(){
        fetch('http://41569d3b.ngrok.io/marketing/company')
            .then(res => res.json())
            .then(json => {
                fetch('http://41569d3b.ngrok.io/ads/vk/getStatistics')
                    .then(res => res.json())
                    .then(json2 => {
                            json = json.map((item, index)=>{
                                if(index === 0){
                                    item.state = json2.response[0];
                                }
                                return item;
                            });
                            this.setState({ data: json });
                    });
        });
    };

    render() {
        let ListCardItems = this.state.data.map((item) =>
            <div className="CardItem">
                <Card key={item.id} data={item}/>
            </div>
        );

        return (
            <div className="CardList">
                <Item.Group divided >
                    <div className="CardItem">
                        <a href="/add_card">
                            <Item>
                                <div className="itemEmpty ">
                                    <Icon name="plus" size="massive" color="black"/>
                                </div>
                            </Item>
                        </a>
                    </div>
                    {ListCardItems}
                </Item.Group>
            </div>
        );
    }
}


export default ListCard;
