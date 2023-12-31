'use client'
import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class Example extends Component {
    render() {
        return (
            <FacebookProvider appId="1450100925850066" chatSupport>
                <CustomChat pageId="184406474760654" minimized={true} />
            </FacebookProvider>
        );
    }
}