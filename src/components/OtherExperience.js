import React, { Component } from 'react';
import WindowHeader from './WindowHeader'
import './OtherExperience.css'
export default class OtherExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='other-experience'>
                <WindowHeader title="Other Projects" />
                <div className='other-experience-body'>
                    <div className='project full-width-project'>
                        <div className='horizontal-align'>
                            <div className='project-pic-full'></div>
                            <div className='project-pic-full'></div>
                        </div>
                        <div className="project-text-full">
                            <b>FRC Team 2706</b> is super cool! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className='other-horizontal-spacer'>
                        <div className='half-width-project'>
                            <div className='project-pic-half'></div>
                            <div className="project-text-half">
                                <b>FRC Team 2706</b> is super cool!
                            </div>
                        </div>
                        <div className='half-width-project'>
                            <div className='project-pic-half'></div>
                            <div className="project-text-half">
                                <b>FRC Team 2706</b> is super cool!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}