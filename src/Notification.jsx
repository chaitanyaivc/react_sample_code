import React, { Component } from 'react';

class Notification extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataToRunFunction: 12345
        }
        console.log('constructor');
    }

    componentDidMount(){
        let dataGotFromParent = this.props.getData(this.state.dataToRunFunction);
        console.log('Component did mount');
    }
    componentWillUnmount(){
        console.log('component unmounted');
    }

    static getDerivedStateFromProps(state, props){
        console.log('state from props');
        return state;
    }

    render(){
        console.log('render method');
        return(
            <h1>{this.props.value}</h1>
        )
    }
}

export default Notification;