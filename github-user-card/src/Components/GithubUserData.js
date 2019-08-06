import React, { Component } from "react";
import axios from 'axios'; 
import GithubUserCard from './GithubUserCard' 

class GithubUserData extends Component{
    constructor(){
        super() 
        this.state = 
        {
            userdata : "",
        }
    }  
   
 componentDidMount(){
     const results = axios.get(`https://api.github.com/users/alasalle`)
     results.then(res =>{
         this.setState({userdata : res.data});
     })
     .catch(error => {
         console.log(error);
     })
 } 

 render(){
     return(
         <div>
          <GithubUserCard user = {this.state.userdata}/> 
         </div>
     )
 }
} 
export default GithubUserData;

