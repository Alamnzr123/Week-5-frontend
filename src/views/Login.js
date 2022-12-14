import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form)

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
        .then((response) => {
            // console.log(response.data)
            localStorage.setItem("token", response.data.data.token);
            localStorage.setItem("data", JSON.stringify(response.data.data.data));
            return navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    }




    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="username"></label>
                                <input type="text" placeholder="Username" className="form-control" onChange={(e) => setForm({...form, username: e.target.value})} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type="text" placeholder="password" className="form-control" onChange={(e) => setForm({...form, password: e.target.value})} />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;