import React from 'react';
import axios from "axios";


class Blogs extends React.Component {
 
    constructor(props){
        super(props)
        this.state={
            allblogs:[]
        }
    }

    componentWillMount(){
        this.getBlogs()
    }

   /*  getBlogs(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
                .then(function(response){
                    console.log(response)
                    console.log(response.data)
                    this.
                }, function(error){
                    console.log(error)
                })
    }
 */

    getBlogs(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                this.setState({allblogs: response.data})
                console.log(this.state.allblogs)
            }, (error)=>{
                console.log(error)
            })
}

    render() { 
        return ( 
            <div>
                <h1>List of blogs from rest api!!!!</h1>
            </div>
         );
    }
}
 
export default Blogs;