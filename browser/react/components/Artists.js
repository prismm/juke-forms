import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Artists extends Component {
  constructor(props){
    super(props);

    this.state = {filteredArtists: this.props.filteredArtists}
  }
  
  componentWillReceiveProps(nextProps){
    if (this.props.filteredArtists.length !== nextProps.filteredArtists.length) { //FIX THIS IF STATEMENT!
      console.log('ARE WE IN HEREE????????')
      this.setState({filteredArtists: nextProps.filteredArtists});
    }
  }

  render() {
    const artists = this.props.filteredArtists;

    return (
      <div>
        <h3>Artists</h3>
        <div className="list-group">
          {
            artists.map(artist => {
              return (
                <div className="list-group-item" key={artist.id}>
                  <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
  
}

