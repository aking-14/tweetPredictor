import React, { Component } from 'react';
import ActiveUser from './ActiveUser'
import GuestUser from './GuestUser'

export class Header extends Component {

    render (){
        return (
            <div>
                    {
                        (this.props.login) ? <ActiveUser /> : <GuestUser />
                    }
            </div>
                    
        )
    }
}

export default Header;