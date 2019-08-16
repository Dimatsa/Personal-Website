import React, { Component } from 'react';
import './WindowHeader.css';

export default class WindowHeader extends Component {
    render() {
        return (
            <div className='window-bar'>
                <div className='window-bar-buttons'>
                    <div className='window-bar-button button-red'></div>
                    <div className='window-bar-button button-yellow'></div>
                    <div className='window-bar-button button-green'></div>
                </div>
                <p className='window-text'>
                    {this.props.title}
                </p>
            </div>
        )
    }
}