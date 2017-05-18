import React, { Component } from 'react';

export default class FilterInput extends Component {
    constructor(props){
        super(props)
    }

    //methods
    render() {
        return (
            <form className="form-group" style={{marginTop: '20px'}}>
            <input
                className="form-control"
                placeholder="Enter artist name"   
                onChange={this.props.changeHandler}
            />
            </form>
        );
    }
}