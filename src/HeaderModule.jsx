import React, { Component } from 'react';

export default class HeaderModule extends Component {

    constructor(props){
        super(props);
        this.state = {
            showSomeData: 'hi'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({showSomeData: 'hello'})
    }

    shouldComponentUpdate(){
        console.log('component should update');
        return true;
    }

    componentDidUpdate(){
        console.log('component updated');
    }

    render(){
        return(
            <div>
                <h1>{this.props.value}</h1>
                <h1>{this.state.showSomeData}</h1>
                <button onClick={this.handleClick}>Update Me</button>
            </div>
        )
    }
}