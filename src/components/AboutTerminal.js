import React, { Component } from 'react';
import WindowHeader from './WindowHeader'
import './AboutTerminal.css';

export default class AboutTerminal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='about-box'>
                <WindowHeader title='About'></WindowHeader>
                <div className='about-terminal-box'>
                    <span className='terminal-text'>
                        <b className='terminal-command'>> Person.origin</b>
                        <br />
                        <b className='terminal-result'>=> "Mumbai, India"</b>
                        <br className='next-terminal-line' />

                        <b className='terminal-command'>> Person.education</b>
                        <br />
                        <b className='terminal-result'>=> "Harvard University"</b>
                        <br className='next-terminal-line' />

                        <b className='terminal-command'>> Person.major</b>
                        <br />
                        <b className='terminal-result'>=> "Whateveryoucallitology"</b>
                        <br className='next-terminal-line' />

                        <b className='terminal-command'>> Person.major.courses</b>
                        <br />
                        <b className='terminal-result'>=> "This, that and that"</b>
                        <br className='next-terminal-line' />

                        <b className='terminal-command'>> Person.expectedGraduation</b>
                        <br />
                        <b className='terminal-result'>=> "July 2030"</b>
                        <br className='next-terminal-line' />

                        <b className='terminal-command'>> Person.languages</b>
                        <br />
                        <b className='terminal-result'>=> ["Java", "Python", "C#"]</b>
                        <br className='next-terminal-line' />

                        <b className='terminal-command'>> Person.technologies</b>
                        <br />
                        <b className='terminal-result'>=> ["Git", "CLI"]</b>
                        <br className='next-terminal-line' />

                        <b className='terminal-command'>> Person.interests</b>
                        <br />
                        <b className='terminal-result'>=> Invalid terminal-command.</b>
                        <br className='next-terminal-line' />

                        <b className='terminal-command'>> Person.resume</b>
                        <br />
                        <b className='terminal-result'>=> "<a class='Hyperlink' href='https://www.google.ca/' >resume.pdf</a>"</b>
                        <br className='next-terminal-line' />

                        <b className='terminal-command'>> Person.email</b>
                        <br />
                        <b className='terminal-result'>=> "<a class='Hyperlink' href='google.ca' >123abc@mail.net</a>"</b>
                        <br className='next-terminal-line' />






                    </span>

                </div>





            </div>)
    }
}