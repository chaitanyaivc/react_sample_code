import React, { Component } from 'react';

class Content extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1>{this.props.value}</h1>
        )
    }
}

export default Content;