import React, { Component } from 'react';
import WindowHeader from './WindowHeader'
import './WorkExperience.css'

export default class WorkExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className = 'work-experience'>
            <WindowHeader title = 'Work Experience'/>
            <div className = 'work-experience-body'>
                <div className = 'work-position'>
                    <div className = 'work-icon'>
                    </div>
                    <b className = 'company-name'>
                            Google
                    </b>
                    <t className = 'date'>Today</t>
                </div>
                <div className = 'work-position'>
                    <div className = 'work-icon'>

                    </div>
                </div>
            </div> 


        </div>
        )
    }
}