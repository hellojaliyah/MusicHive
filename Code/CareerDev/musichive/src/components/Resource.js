import React, {Component} from "react";
import {Redirect} from 'react-router-dom'

class Resource extends Component {

    state = {
      clicked: false
    }

    handleClick = () => {
      const { resource, onSelect } = this.props;
      onSelect(resource.id);
      this.setState({
        clicked: true
      })
    };

    render () { 
    const { resource } = this.props;
    // const {resource} = props;

    return (
      <div className={"box"} onClick={this.handleClick}>
        {this.state.clicked ? (
          <Redirect to={`/view/${resource.id}`} />
         ) : null}
        <h2>{resource.title}</h2>
        <p>{resource.artist}</p>
        <p>Released: {resource.releaseYear}</p>
        {resource.songLength ? (
          <p>Length: {resource.songLength} minutes</p>
        ) : null}
        {/* conditional ? true code : false code */}
        <p>Comments: {resource.comments.length}</p>
      </div>
    );
  };
};

export default Resource;