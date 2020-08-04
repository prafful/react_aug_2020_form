import React from 'react';


class AddFriend extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            friendname:''
        }
    }


    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({friendname: event.target.value})

    }
    
    render() { 
        return (
            <div>
                <h3>Add Friend!!!!</h3>
                <form>
                    <label>Name: </label>
                    <input type='text' id="friendname" onChange={this.getName}></input>
                    <br></br>
                    Friend Name: { this.state.friendname }
                </form>
            </div>
          );
    }
}
 
export default AddFriend;