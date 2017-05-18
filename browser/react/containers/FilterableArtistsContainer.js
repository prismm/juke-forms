import React, { Component } from 'react';
import Artists from '../components/Artists.js'; //the component rendering the list of artists -- we will pass props to it
import FilterInput from '../components/FilterInput.js'; //the form component

export default class FilterableArtistsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {searchTerm: '', artistsToRender: this.props.artists};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        const searchTerm = event.target.value;
        const actuallyFilteredArtists = this.props.artists.filter((artist) => artist.name.indexOf(searchTerm) !== -1)

        this.setState({artistsToRender: actuallyFilteredArtists });
    }

    // componentDidMount () {

    // }

    render(){
        return (
            <div>
                <FilterInput {...this.props} changeHandler = {this.handleChange} />
                <Artists {...this.props} filteredArtists = {this.state.artistsToRender}/>
            </div>
        )
    }
}