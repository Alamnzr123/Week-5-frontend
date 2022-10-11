import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Insert = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        phone: '',
        password: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(form)
        if(form.username == "" || form.phone == "" || form.password == ""){
            alert('Semua input wajib diisi')
        } else {
            const body = {
                username: form.username,
                phone: form.phone,
                password: form.password
            }
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/user`, body)
            .then((response) => {
                if (response.data.code !== 200) {
                    alert('error: ' + response.data.message)
                } else {
                    console.log(response.data);
                    return navigate('/')
                }
            }).catch((err) => {
                console.error(err)
            })
        }
    }
    return (
        <>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group m-1">
                    <input type="text" className="form-control" onChange={(e) => setForm({...form, username: e.target.value})} placeholder="username" />
                </div>
                <div className="form-group m-1">
                    <input type="text" className="form-control" onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="phone" />
                </div>
                <div className="form-group m-1">
                    <input type="text" className="form-control" onChange={(e) => setForm({...form, password: e.target.value})} placeholder="password" />
                </div>
                <div className="form-group m-1">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>

        </>
    )

}

export default Insert;