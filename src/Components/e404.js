import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class e404 extends Component {
    render() {
        return (
            <div className="center container">
                <h4 className="center">Parece que te equivocaste de pagina!</h4>
                <Link to="/">Volver a la home!</Link>
            </div>
        )
    }
}

export default e404
