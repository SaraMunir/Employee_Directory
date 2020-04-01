import React,{useState} from 'react'
import EmployeeSearchForm from './EmployeeSearchForm.js'

function Jumbotron(props) {
    const aboutStyle= {
        height: '50vh',
        color: 'white',
        backgroundImage: 'linear-gradient(45deg,  #6d2ab922  ,#0026ff22 ), linear-gradient( #00000055,  #00000055), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);',
        backgroundSize: 'cover',
        backgroundPostition: 'center' 
    }
    
    return (
        <div>
            <div class="jumbotron jumbotron-fluid" style={aboutStyle}>
                <div class="container text-center">
                    <h1 class="display-4">Meet Our Team</h1>
                    <p class="lead">They're the Good Boys and Girls</p>
                    <EmployeeSearchForm handleInputChange={props.handleInputChange}/>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Jumbotron
