import React from 'react';


class FriendDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            year:parseInt(this.props.since),
            location:''
        }
       
    }


    addSince=()=>{
        this.setState({year: this.state.year+1})
    }

    minusSince=()=>{
        this.setState({year: this.state.year-1})
    }
  
    render() { 
        return ( 
            <div>
                <h1>Friend Name: { this.props.name} </h1>
                <p>I am a {this.props.children} friend!</p>
                <p>Since: {this.state.year}</p>
                <button onClick={this.addSince}>Change Since + </button>
                &nbsp;
                <button onClick={this.minusSince}>Change Since + </button>
            </div>    
        )
    }
       
}
 
export default FriendDetail;