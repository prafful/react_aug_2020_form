import React from 'react';
import axios from "axios";
import FriendDetail from './frienddetail';

class Friend extends React.Component {

    constructor(props){
        super(props)
        this.state={
            friends:[]
        }
    }

    componentWillMount(){
        this.getAllFriends()
    }

    getAllFriends=()=>{
        axios.get('http://localhost:3000/allfriends')
                .then(response=>{
                    console.log(response);
                    console.log(response.data)
                    this.setState({friends: response.data})
                    console.log(this.state.friends);
                }, error=>{
                    console.error(error);
                })
    }

    renderAllFriends=()=>{
        return this.state.friends.map(friend=>{
            return(
              
                    <FriendDetail
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        since={friend.since}
                    >

                    </FriendDetail>
                
            )
        })
    }
  
    render() { 
        return ( 
    
               
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Since</th>
                            <th colSpan='2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                            {this.renderAllFriends()}
                      
                    </tbody>

                </table>
      
         );
    }
}
 
export default Friend;