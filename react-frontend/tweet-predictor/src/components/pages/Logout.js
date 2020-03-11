import React, { Component } from 'react';

export class Logout extends Component {

    componentDidMount(){
        fetch('/logout', {
            credentials: 'include'
        }).then(res => res.json()).then(r => {
            if (r.logout){
                this.props.logout(false);
                this.props.history.push("/")
            }else{
                this.props.history.push("/login")
            }
        });
    }

    render (){
        return(
            <div></div>
        )
    }
}

export default Logout;
