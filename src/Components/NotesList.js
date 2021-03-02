import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'
export class NotesList extends Component {
    state = {
        notes: []
    }
    componentDidMount = () => {
        this.leerDB()
    }
    leerDB = async () => {
        const res = await axios.get("https://api.mern-tutorial.eze.wtf/api/notes/")
        this.setState({
            notes: res.data
        })
    }
    deleteNote = async (id) => {
        await axios.delete("https://api.mern-tutorial.eze.wtf/api/notes/" + id)
        this.leerDB();
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note =>(
                        <div className="col-md-4 p-2  " key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{note.title}</h5>
                                    {/* <button className="btn btn-secondary">Edit</button> */}
                                    <Link to={"/editar/" + note._id} className="btn btn-secondary">Edit</Link>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                    <p>{note.author}</p>
                                    <p>{format(note.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={()=> this.deleteNote(note._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default NotesList
