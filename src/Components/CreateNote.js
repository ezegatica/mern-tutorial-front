import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export class CreateNote extends Component {
    state = {
        disableForm: false,
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date()
    }
    componentDidMount = () => {
        this.leerUsuarios()
    }
    submitNuevaNota = async (e) => {
        console.log('subiedno!');
        console.log("state", this.state);
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.userSelected
        }
        await axios.post("https://api.mern-tutorial.eze.wtf/api/notes", newNote)
        window.location.href = '/'

    }
    change = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
    }
    changeDate = async (date) => {
        await this.setState({
            date
        })
    }
    leerUsuarios = async () => {
        const res = await axios.get('https://api.mern-tutorial.eze.wtf/api/users')
        this.setState({
            users: res.data,
            userSelected: res.data[0].username
        })
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear una Nota</h4>
                    {/* SELECT USER */}
                    <form onSubmit={this.submitNuevaNota}>
                    <div className="form-group">
                        <select className='form-control' name='userSelected' onChange={this.change}>
                            {
                                this.state.users.map((user) => {
                                    return (
                                        <option value={user.username} key={user._id} id='userSelected'>
                                            {user.username}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" className='form-control' placeholder='Titulo' name='title' id='title' required onChange={this.change} />
                    </div>

                    <div className="form-group">
                        <textarea className='form-control' id='content' name='content' placeholder='Contenido' required onChange={this.change}></textarea>
                    </div>

                    <div className="form-group">
                        <DatePicker className='form-control' id='date' name='date' selected={this.state.date} onChange={this.changeDate} />
                    </div>

                    
                        <Button type="submit" className="mb-2" disabled={this.state.disableForm} onClick={this.submitNuevaNota}>
                            Guardar
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateNote
