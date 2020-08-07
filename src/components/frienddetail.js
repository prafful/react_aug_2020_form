import React from 'react';
//import { withRouter } from "react-router-dom";    //un-comment this if working with withRouter

//add export before class if working with withRouter
 class FriendDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
        }

        console.log('In Friend Detail...');
        console.log(this.props);
       
    }

    deleteCurrentFriend=()=>{
        console.log("delete friend with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editFriendWithId=()=>{
        //this also works
        //this.props.history.push({ //un-comment this if working with withRouter
        //    pathname: '/editfriend', //un-comment this if working with withRouter
        //    state: {myid: this.props.id}  //un-comment this if working with withRouter
        //})    //un-comment this if working with withRouter
        console.log("edit friend with id: " + this.props.id);// comment this if working with withRouter
        this.props.editId(this.props.id)//comment this if working with withRouter
    }
  
    render() { 
        let imgStyle ={
            width:'100px',
            borderRadius:'10px'
        }
        return ( 
            <tr>
         
                <td>{this.props.id} </td>
                <td>
                    <img src={"images/" + this.props.profile} style={imgStyle}></img>
                </td>
                <td>{this.props.name} </td>
                <td>{this.props.since}</td>
                <td>
                    <button >Since + </button>
                </td>
                <td>
                    <button >Since - </button>
                </td>
                <td>
                    <button onClick={this.editFriendWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentFriend}>Del</button>
                </td>
                
            </tr>    
        )
    }
       
}
 
export default FriendDetail;//comment this if working with withRouter
//export default withRouter(FriendDetail)//un-comment this if working with withRouter