import React, { Component } from 'react';
import './PageHeader.css'
export default class PageHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className = 'rectangle'>
            <img className = 'photo'></img>
            <div className = 'text'>
                <b className = 'name'>Your Name Here</b>
                <br className = 'new-line'></br>
                <t className = 'description'>This is your description. You can put whatever you want here. You could use this to talk about who you are and what you do.</t>
                <br></br>
                <a href = 'google.ca'><img className = 'icon'></img></a>
                <a href = 'google.ca'><img className = 'icon'></img></a>
                
            </div>
            
        </div>
        )
    }
}