import React, { Component } from 'react';
import { Image } from 'react-native';

export default class spaceImage extends Component {
    render() {
        let pic = {
            uri:
            'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1431&q=80'

        };
        return (
            <Image source={pic} style={{width: 200, height: 150}}/>
        );
    }
}