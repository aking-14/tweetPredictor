import React, { Component } from 'react';
import ProfilePage from '../layout/ProfilePage'

export class Profile extends Component {
    state = {loading: true};

    componentDidMount(){
        fetch('/loginsession', {
            credentials: 'include'
        }).then(res => res.json()).then(r => {
            if (r.valid){
                this.setState({loading: false});
            }else{
                this.props.history.push("/login")
            }
        });
    }

    render (){
        return(
            <div>{this.state.loading ? "": <ProfilePage />}</div>
        )
    }
}

export default Profile;
