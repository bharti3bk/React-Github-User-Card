import React, { Component } from "react";
import axios from 'axios'; 
import GithubUserCard from './GithubUserCard' 
import GithubUserFollowers from './GithubUserFollowers';

class GithubUserData extends Component{
    constructor(){
        super() 
        this.state = 
        {
            userdata : "",
            followersdata : []
        }
    }  
   
 componentDidMount(){
     const results = axios.get(`https://api.github.com/users/alasalle`)
     results.then(res =>{
         this.setState({userdata : res.data});
         console.log(res.data)
     })
     .catch(error => {
         console.log(error);
     })  

     const followerResults = axios.get(`https://api.github.com/users/alasalle/followers`)
     followerResults.then(response => {
         this.setState({followersdata : response.data})
         console.log(response.data)
     })
     .catch(error =>{
         console.log(error);
     })
 } 

 render(){
     return(
         <div>
          <GithubUserCard user = {this.state.userdata}/> 
           {this.state.followersdata.map(follower => 
           <GithubUserFollowers follower={follower} />)}
          
         </div>
     )
 }
} 
export default GithubUserData;

