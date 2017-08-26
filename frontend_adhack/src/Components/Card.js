import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'

const Card = () => (
        <List.Item className="Card Card-1">
            <Image avatar src='http://68.media.tumblr.com/2612088fda38b4eeb28b0884fc59b145/tumblr_o8putdcByN1st5lhmo1_1280.jpg' />
            <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
                <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
            </List.Content>
        </List.Item>
);

export default Card;
