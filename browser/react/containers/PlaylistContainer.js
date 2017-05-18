import React, { Component } from 'react';
import NewPlayLists from '../components/NewPlayLists'
import axios from 'axios'


export default class PlaylistContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			newPlayListInfo:'',
			submittedValue: '',
			isDisabled: true,
			isHidden: true
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeEvent = this.changeEvent.bind(this);
		this.createNewPlaylist = this.createNewPlaylist.bind(this);
		console.log('PlaylistContainer')
	}

	handleSubmit (event){
		event.preventDefault();
		this.createNewPlaylist(this.state.newPlayListInfo)
		console.log('creating new playlist with this info:', this.state.newPlayListInfo)
		this.setState({
			// submittedValue: this.state.newPlayListInfo,
			newPlayListInfo: ''
		})

	}

	changeEvent(event){
		if (event.target.value.length === 0){
			this.setState({
				newPlayListInfo: '',
				isDisabled: true,
				isHidden: false
			})
		}
		else if (event.target.value.length < 16){
			this.setState({
				newPlayListInfo: event.target.value,
				isDisabled: false,
				isHidden: true
			})
		} else {
			this.setState({
				newPlayListInfo: event.target.value,
				isDisabled: true,
				isHidden: false
			})
		}
	}

	createNewPlaylist(playlist) {
		const playlistObj = {name: playlist};
		axios.post('/api/playlists', playlistObj)
			.then(res => res.data)
			.then(result => {
				console.log(result) // response json from the server!
  		});
	}

	render(){
		return (
			<div>
				<NewPlayLists
				submitEvent = {this.handleSubmit}
				newPlayListInfo = {this.state.newPlayListInfo}
				changeEvent={this.changeEvent}
				isDisabled = {this.state.isDisabled} 
				isHidden = {this.state.isHidden}/>
			</div>
			)
	}
}
