import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Friend from './friend';
import About from './about';
import AddFriend from './addfriend';

class Content extends React.Component {
    state = {  }
    render() { 
        return ( 

            <Switch>
                <Route path='/' exact component={Friend}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/addfriend' component={AddFriend}></Route>
            </Switch>
         );
    }
}
 
export default Content;