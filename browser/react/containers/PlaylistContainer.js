import React, { Component } from 'react';
import NewPlayLists from '../components/NewPlayLists'


export default class PlaylistContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			newPlayListInfo:'',
			submittedValue: '',
			isDisabled:false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeEvent = this.changeEvent.bind(this);
		console.log("PlaylistContainer")

	}

	handleSubmit (event){
		event.preventDefault();
		this.setState({
			submittedValue: this.state.newPlayListInfo,
			newPlayListInfo:''
		})
		
	}

	changeEvent(event){
		if(event.target.value.length === 0){
			this.setState({
				newPlayListInfo:'',
				isDisabled : true
			})
		}
		else if(event.target.value.length < 16){
			this.setState({
				newPlayListInfo:event.target.value,
				isDisabled : false
			})
		}else{
			this.setState({
				newPlayListInfo:event.target.value,
				isDisabled : true
			})
		}
		
	}

	render(){
		return (
			<div>
				<NewPlayLists 
				submitEvent = {this.handleSubmit} 
				newPlayListInfo = {this.state.newPlayListInfo} 
				changeEvent={this.changeEvent}
				isDisabled = {this.state.isDisabled}/>
			</div>
			)
	}
}