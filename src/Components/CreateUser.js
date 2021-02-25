import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
export class CreateUser extends Component {
    state = {
        users: [],
        newUser: '',
        disableForm: false
    }
    componentDidMount = () => {
        this.leerDB()
    }
    leerDB = async () => {
        const res = await axios.get("https://mern-tutorial-server.gati.repl.co/api/users")
        this.setState({
            users: res.data
        })
        console.log(this.state);    
    }
    newUserChange = async (e) => {
        await this.setState({
            [e.target.id]: e.target.value
        })
    }
    newUserSubmit = async (e) => {
        e.preventDefault()
        this.setState({
            users: [...this.state.users, 
                {username: this.state.newUser}
            ],
            newUser: '',
            disableForm: true,
        })
        await axios.post("https://mern-tutorial-server.gati.repl.co/api/users", {
            username: this.state.newUser
        })
        this.setState({
            disableForm: false
        })
    }
    userDelete = async (id) => {
        console.log('ID: ', id);
        await axios.delete("https://mern-tutorial-server.gati.repl.co/api/users/" + id)
        this.leerDB()
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear nuevo usuario!</h3>
                        <form onSubmit={this.newUserSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="newUser" onChange={this.newUserChange} value={this.state.newUser} required disabled={this.state.disableForm}/>
                            </div>
                            <Button type="submit" className="mb-2" disabled={this.state.disableForm}>
                                Enviar!
                                 </Button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {this.state.users.map(user => {
                            return (
                                <li 
                                className="list-group-item list-group-item-action" 
                                key={user._id}
                                onDoubleClick={ () => this.userDelete(user._id)}
                                >
                                    {user.username}
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CreateUser
