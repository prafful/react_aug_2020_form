import React from 'react';
import FriendDetail from "./frienddetail";

class Friend extends React.Component {



   
  
    render() { 
        return ( 
            <div>

                
                <FriendDetail name="OBB" since="10" >Good</FriendDetail>
                <FriendDetail name="CAS" since="4">Bad</FriendDetail>
                <FriendDetail name="BNP" since="8">Good</FriendDetail>
                <FriendDetail name="OWIOH" since="13">Bad</FriendDetail>
            </div>
         );
    }
}
 
export default Friend;