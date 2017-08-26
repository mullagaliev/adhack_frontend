import React, { Component } from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
import  Card from './Card';
import  AddCard from './AddCard';
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
var data = {"response":[ jsonItem]};

class ListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {data: data};
    }
    onUpdate(){
        jsonItem = data.response.pop();

        var newJsonItem = Object.assign({}, jsonItem);
        newJsonItem.id +=  1;
        data.response.push(jsonItem);
        data.response.push(newJsonItem);
        console.log( data.response);
        this.setState({ data: data });
    };
    render() {
        let ListCardItems = data.response.map((item) =>
            <Card key={item.id} data={item}/>
        );

        return (
            <div className="CardList">
                <Item.Group divided onClick={this.onUpdate.bind(this)}>
                    {ListCardItems}
                    <div className="CardItem">
                        <AddCard />
                    </div>
                </Item.Group>
            </div>
        );
    }
}


export default ListCard;
