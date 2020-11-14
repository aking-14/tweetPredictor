import React from 'react'
import { Route, Redirect } from 'react-router-dom'

/*
export default class PrivateRoute extends React.Component {

}
*/

export const PrivateRouteLogin = ({component: Component, ...rest}) => {
    return (
        <Route path={rest.path} render={(props) => rest.login ? <Redirect to="/" /> : <Component {...props} activeUser={rest.activeUser} /> }/>
    )
}