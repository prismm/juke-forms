import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Artists extends Component {
  constructor(props){
    super(props);

    this.state = {childFilteredArtists: this.props.filteredArtists}

  }
  
  componentWillReceiveProps(nextProps){
    if (this.state.childFilteredArtists.length !== nextProps.filteredArtists.length) { 
      this.setState({childFilteredArtists: nextProps.filteredArtists});
    }
  }

  render() {
    const artists = this.state.childFilteredArtists;

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

