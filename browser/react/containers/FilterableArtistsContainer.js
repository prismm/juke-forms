import React, { Component } from 'react';
import Artists from '../components/Artists.js'; //the component rendering the list of artists -- we will pass props to it
import FilterInput from '../components/FilterInput.js'; //the form component

export default class FilterableArtistsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {searchTerm: '', filteredArtists: this.props.artists};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        const searchTerm = event.target.value;
        console.log(searchTerm);
        const filteredArtists = this.state.filteredArtists;
        const actuallyFilteredArtists = filteredArtists.filter((artist) => artist.name.indexOf(searchTerm) !== -1)
        console.log('unfiltered Artists: ', filteredArtists)
        console.log('actually filtered Artists: ', actuallyFilteredArtists)
        // this.setState({searchTerm: event.target.value});


        this.setState({filteredArists: actuallyFilteredArtists });
    }

    // componentDidMount () {

    // }

    render(){
        return (
            <div>
                <FilterInput {...this.props} changeHandler = {this.handleChange} />
                <Artists {...this.props} filteredArtists = {this.state.filteredArtists}/>
            </div>
        )
    }
}