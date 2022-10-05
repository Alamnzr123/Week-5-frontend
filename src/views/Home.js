import React from 'react';

import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <h1>Halaman Home</h1>
            <Link className="btn btn-primary" to='/new'>Detail</Link>
        </>
    )

}

export default Home;