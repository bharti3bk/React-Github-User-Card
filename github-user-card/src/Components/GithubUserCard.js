import React, { Component } from "react";

class GithubUserCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="ui card" >
        <div class="image">
          <img src={this.props.user.avatar_url} alt = "UserImg" />
        </div>
        <div class="content">
          <a class="header" id = "headercard">{this.props.user.login}</a>
          <div class="description">
           {this.props.user.bio}
          </div>
        </div>
      </div>
    );
  }
}  

export default GithubUserCard;
