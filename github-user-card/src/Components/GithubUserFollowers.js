import React, {Component } from "react"; 

class GithubUserFollowers extends Component{
constructor(props){
    super(props) 
} 
render(){
    return(
        <div class="ui card">
        <div class="image">
          <img src={this.props.follower.avatar_url} alt = "FollowerImg" />
        </div>
        <div class="content">
          <a class="header">{this.props.follower.login}</a>
          <div class="description">
           {this.props.follower.bio}
          </div>
        </div>
      </div>
    )
}
} 
export default GithubUserFollowers;