import React, { Component } from 'react';
import ActiveUser from './ActiveUser'
import GuestUser from './GuestUser'

export class Header extends Component {

    userLogout = (d) => {
        this.props.userLogout(d)
    }

    render (){
        return (
            <div>
                    {
                        (this.props.login) ? <ActiveUser {...this.props} userLogout={this.userLogout}/> : <GuestUser />
                    }
            </div>
                    
        )
    }
}

export default Header;