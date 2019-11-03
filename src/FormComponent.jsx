import React, { Component } from 'react';
import DataComponent from './DataComponent';

class FormComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            showData: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            showData: true
        })
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        
    } 

    render(){
        return(
            <div>
                { 
                    this.state.showData === false ? 
                    <form onSubmit={this.handleSubmit}>
                        First name:
                            <input 
                                type="text" 
                                name="firstName" 
                                value={this.state.firstName} 
                                onChange={this.handleChange}
                            />
                        Last name:
                            <input 
                                type="text" 
                                name="lastName" 
                                value={this.state.lastName} 
                                onChange={this.handleChange}
                            />
                        <button>Submit</button>
                    </form> : 
                    <DataComponent 
                        firstName ={this.state.firstName} 
                        lastName = {this.state.lastName} 
                    />
                }
            </div>
        )
    }
}

export default FormComponent;