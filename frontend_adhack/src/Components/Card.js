import React, {Component} from 'react';

import {
    Button,
    Icon,
    Image as ImageComponent,
    Item,
    Label,
    Image,
    Modal,
    Header,
    Segment,
    Statistic,
    Grid
} from 'semantic-ui-react'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.data};
    }

    render() {
        console.log(this.state.data);
        let timestamp = this.state.data.create_time;
        let date = new Date();
        date.setTime(timestamp);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let clicks = 0;
        let views = 0;
        let ctr = 0;
        let isVK = false;
        let isFB = false;
        let img = "https://pp.userapi.com/c639621/v639621621/432ae/pxVwkHUtBr8.jpg";



        let days = this.state.data.state;
        if (this.state.data.pictureLink !== undefined){
            img = this.state.data.pictureLink;
        }
        if (days !== undefined){
            days = days.stats;
        }
        let that = this;

        function setKPIs() {

            if(days !== undefined){
                for(let i = 0; i < days.length; i++){
                    if (days[i].impressions !== undefined){
                        views += Number(days[i].impressions);
                    }
                    if (days[i].clicks !== undefined){
                        clicks += Number(days[i].clicks);
                    }
                }
            }
            if(views !== 0){
                ctr = clicks * 100 / views;
                ctr = ctr.toString();
                ctr = ctr.substring(0, ctr.indexOf("." ) + 3);
            }
            if (that.state.data.markets !== undefined && that.state.data.markets !== null){
                if (that.state.data.markets.indexOf('vk') >= 0){
                    isVK = true;
                }
                if (that.state.data.markets.indexOf('fb') >= 0){
                    isFB = true;
                }
            }

        }

        setKPIs();

        let strDate = day + "." + month + "." + year;
        return (
            <Item>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column  width="4">
                            <Item.Image size="tiny"
                                        src={img}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Item.Content>
                                <Item.Header as='h3'>{this.state.data.companyName}</Item.Header>
                                <Item.Description><Icon name="line chart" size="large"/><b>Бюджет</b> {this.state.data.limit}</Item.Description>
                                <Item.Description> <Icon name="money" size="large"/><b>CTR</b> {ctr}%</Item.Description>
                            </Item.Content>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


                <Item.Extra>
                    <br/>
                    {isVK && [<Label><Icon name="vk" color="blue"/>Vkontakte</Label>]}

                    {isFB && [<Label><Icon name="facebook f" color="blue"/>Facebook</Label>]}
                </Item.Extra>
                <br/>
                <Modal trigger={<Button primary fluid>Просмотреть</Button>} closeIcon='close'>
                    <Modal.Header>{this.state.data.companyName}</Modal.Header>
                    <Modal.Content scrolling>
                        <Modal.Description>
                            <Segment raised>
                                {/*<Label></Label>*/}
                                <Label><h2><Icon name="info"/>Общая информация</h2></Label>
                                <Statistic.Group>
                                    <Statistic>
                                        <Statistic.Value><Icon name='money' />
                                            {this.state.data.limit}</Statistic.Value>
                                        <Statistic.Label>Бюджет</Statistic.Label>
                                    </Statistic>

                                    <Statistic>
                                        <Statistic.Value>
                                            <Icon name='building outline' text/>
                                            Санкт-Петербург
                                        </Statistic.Value>
                                        <Statistic.Label>Город</Statistic.Label>
                                    </Statistic>

                                    {/*<Statistic>*/}
                                        {/*<Statistic.Value>*/}
                                            {/*<Icon name='users' />*/}
                                            {/*18-38*/}
                                        {/*</Statistic.Value>*/}
                                        {/*<Statistic.Label>Возраст</Statistic.Label>*/}
                                    {/*</Statistic>*/}

                                </Statistic.Group>
                            </Segment>
                            {isVK && [<Segment raised>
                            <Label><h2><Icon name="vk" color="blue"/>Vkontakte</h2></Label>

                            <Statistic.Group>
                                <Statistic>
                                    <Statistic.Value><Icon name='money' />
                                        135</Statistic.Value>
                                    <Statistic.Label>Потрачено</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value><Icon name='user' />
                                        {views}</Statistic.Value>
                                    <Statistic.Label>Показы</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value><Icon name='hand pointer' />
                                        {clicks}</Statistic.Value>
                                    <Statistic.Label>Переходы</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value><Icon name='area chart' />
                                        {ctr}%</Statistic.Value>
                                    <Statistic.Label>CTR</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </Segment>]}

                        {isFB && [<Segment raised>
                            <Label><h2><Icon name="facebook f" color="blue"/>Facebook</h2></Label>

                            <Statistic.Group>
                                <Statistic>
                                    <Statistic.Value><Icon name='money' />
                                        0</Statistic.Value>
                                    <Statistic.Label>Потрачено</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value><Icon name='user' />
                                        0</Statistic.Value>
                                    <Statistic.Label>Показы</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value><Icon name='hand pointer' />
                                        0</Statistic.Value>
                                    <Statistic.Label>Переходы</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value><Icon name='area chart' />
                                        0%</Statistic.Value>
                                    <Statistic.Label>CTR</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </Segment>]}

                        </Modal.Description>
                    </Modal.Content>
                    {/*<Modal.Actions>*/}
                    {/*<Button primary content='Закрыть' onClick={this.close}/>*/}
                    {/*</Modal.Actions>*/}
                </Modal>
            </Item>
        );
    }
}

export default Card;
