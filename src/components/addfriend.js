import React from 'react';
import axios from 'axios'

class AddFriend extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            friendname:'',
            friendsince:0,
            nameError:'',
            sinceError:'',
            buttonStatus: false
        }
    }

    checkValidation=()=>{
       
       let nameerror = ''
       let sinceerror = ''
       if(this.state.friendname.includes('#')){
           console.log('name having #!');
           nameerror = 'name having invalid #'
       }
       //check for other conditions!
       if(nameerror){
           console.log('set state for nameError');
           this.setState({
                nameError: nameerror,
                buttonStatus: true
            })
           
           return false
       }

       this.setState({
           nameError:'',
           buttonStatus:false
        })
       return true
    }


    getName=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.checkValidation()
        this.setState({friendname: event.target.value})
        this.checkValidation()

        
       

    }

    getSince=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({friendsince: event.target.value})
    }

    addFriend=()=>{
        console.log('Add friend via axios and post')
        let friendRequestBody = {
            "name": this.state.friendname,
            "since": this.state.friendsince
        }
        axios.post('http://localhost:3000/allfriends', friendRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/')
                }, error=>{
                    console.error(error);
                })
    }
    
    render() { 
      
        
        return (
            <div>
                <h3>Add New Friend!!!!</h3>
                <form>
                    <label>Full Name: </label>
                    <input type='text' id="friendname" onChange={this.getName}></input>
                    {this.state.nameError}
                    <br></br>
                    <label>Since: </label>
                    <input type='number' id="friendsince" onChange={this.getSince}></input>
                    {this.state.sinceError}
                    <br></br>
                    <button type="button" onClick={this.addFriend} disabled={this.state.buttonStatus}>Add Friend</button>
                    <br></br>
                    <div>
                        <h4>Preview</h4>
                        Friend Name: {this.state.friendname}
                        <br></br>
                        Friend Since: {this.state.friendsince}
                        <br></br>
                    </div>
                    
                </form>
            </div>
          );
    }
}
 
export default AddFriend;