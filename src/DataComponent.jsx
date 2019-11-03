import React, { Component } from 'react';

class DataComponent extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    // static getDerivedStateFromProps(){
    //     state=props;
    //     return state;
    // }

    render(){
        return(
            <div>
                Welcome {this.props.firstName} {this.props.lastName}
            </div>
        )
    }
}

export default DataComponent;