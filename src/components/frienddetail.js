import React from 'react';


class FriendDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
        }
       
    }


   
  
    render() { 
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.props.since}</td>
                <td>
                    <button >Change Since + </button>
                </td>
                <td>
                    <button >Change Since - </button>
                </td>
               
                
            </tr>    
        )
    }
       
}
 
export default FriendDetail;