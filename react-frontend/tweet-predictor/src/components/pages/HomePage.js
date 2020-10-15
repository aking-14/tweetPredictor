import React from 'react';
import UserHomePage from './UserHomePage.js'
import GuestHomePage from './GuestHomePage.js'

export default class HomePage extends React.Component {

    activeUser = (d) => {
        this.props.activeUser(d)
    }

    render (){
        //make homepage profile and userhomepage a different tab
        return (
            <div>
                {
                    (this.props.login) ? <UserHomePage /> : <GuestHomePage activeUser={this.activeUser}/>
                }
            </div>
        )
    }
}