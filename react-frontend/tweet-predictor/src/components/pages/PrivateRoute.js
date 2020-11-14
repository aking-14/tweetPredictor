import React from 'react'
import { Route, Redirect } from 'react-router-dom'

/*
export default class PrivateRoute extends React.Component {

}
*/

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route path={rest.path} render={() => rest.login ? <Component seq={rest.seq} /> : <Redirect to="/" />}/>
    )
}