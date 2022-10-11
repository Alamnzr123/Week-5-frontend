import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import '../assets/style.css';
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    const [loading, setLoading] = useState(true);
    const [iserror, setIsError] = useState(false);
    const [errormessage, setErrorMessage] = useState('');


    const [queryparam] = useSearchParams();
    const search = queryparam.get('search');
    const sort = queryparam.get('sort');
    const type = queryparam.get('type');

    // mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("data");

        if (!token || !user) {
            return navigate('/login')
        }

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
            headers: {
                token: token
            }
        })
            .then((response) => {
                console.log(response.data.data.rows)
                setUser(response.data.data.rows)
            })
            .catch((error) => {
                console.log(error);
                setIsError(true);
                setErrorMessage("Connection Error")
            }).finally(() => {
                setLoading(false);
            })
    }, []);


    const logout = () => {
        localStorage.clear();
        return navigate('/login')
    }
    return (
        <>
            <h1> Halaman Home {search} {sort} {type}</h1>

            <Link to="/12">Detail</Link> | <Link to="/new">Insert</Link> |
            <Link to="/?search=abc&sort=name&type=asc">Search</Link>

            {/* {JSON.stringify(user)} */}

            {/* {loading ? (
                <div>loading</div>
            ) : iserror ? (
                <div>{errormessage}</div>
            ) :
                user.map((e, i) => {
                    return (
                        <div key={i}>
                            {e.username}
                        </div>
                    )
                })
            } */}


            {
                loading ? (
                    <h2>Loading</h2>
                ): (
                    user.map((item, i) => (

                        <div key={i} className="card card-body">
                            {item.username}
                            {item.phone}
                            {item.image}

                            <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`} style={{width: '500px', height: '500px'}} alt="gambar1" />
                        </div>
                    ))
                )
            }



        </>
    )

}

export default Home;