import React, { Component } from 'react'
import NotesList from './NotesList'

export class Home extends Component {
    render() {
        return (
            <div>
                Home
                <NotesList/>
            </div>
        )
    }
}

export default Home
