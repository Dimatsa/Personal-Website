import React, { Component } from 'react';
import './AboutTerminal.css';

export default class AboutTerminal extends Component {
    constructor(props) {
        super(props);
    }

      
    render() {
        return (
        <div className = 'Box'>
            <div className = 'WindowBar'>
                <div className = 'Circles'>
                    <div  className = 'RedCircle'></div>
                    <div className = 'YellowCircle'></div>
                    <div className = 'GreenCircle'></div>
                </div>
                <p className = 'WindowText'>
                    System Information
                    
                </p>
            
                
               
           </div>
            <div className = 'BlackBox'>
                <span className = 'TerminalText'>
                    <b class = 'Command'>> Person.origin</b>
                    <br/>
                    <b class = 'Result'>=> "Mumbai, India"</b>
                    <br class = 'NextTerminalLine'/>

                    <b class = 'Command'>> Person.education</b>
                    <br/>
                    <b class = 'Result'>=> "Harvard University"</b>
                    <br class = 'NextTerminalLine'/>

                    <b class = 'Command'>> Person.major</b>
                    <br/>
                    <b class = 'Result'>=> "Whateveryoucallitology"</b>
                    <br class = 'NextTerminalLine'/>

                    <b class = 'Command'>> Person.major.courses</b>
                    <br/>
                    <b class = 'Result'>=> "This, that and that"</b>
                    <br class = 'NextTerminalLine'/>

                    <b class = 'Command'>> Person.expectedGraduation</b>
                    <br/>
                    <b class = 'Result'>=> "July 2030"</b>
                    <br class = 'NextTerminalLine'/>

                    <b class = 'Command'>> Person.languages</b>
                    <br/>
                    <b class = 'Result'>=> ["Java", "Python", "C#"]</b>
                    <br class = 'NextTerminalLine'/>

                    <b class = 'Command'>> Person.technologies</b>
                    <br/>
                    <b class = 'Result'>=> ["Git", "CLI"]</b>
                    <br class = 'NextTerminalLine'/>

                    <b class = 'Command'>> Person.interests</b>
                    <br/>
                    <b class = 'Result'>=> Invalid command.</b>
                    <br class = 'NextTerminalLine'/>

                    <b class = 'Command'>> Person.resume</b>
                    <br/>
                    <b class = 'Result'>=> "<a class = 'Hyperlink' href = 'https://www.google.ca/' >resume.pdf</a>"</b>
                    <br class = 'NextTerminalLine'/>

                    <b class = 'Command'>> Person.email</b>
                    <br/>
                    <b class = 'Result'>=> "<a class = 'Hyperlink' href = 'google.ca' >123abc@mail.net</a>"</b>
                    <br class = 'NextTerminalLine'/>


                



                </span>
           
            </div>
            




        </div>)
    }
}