import React from 'react'
import { useParams } from "react-router-dom";

const Home = () => {
    const params = useParams();
    console.log(params)
    return (
    <div><h1>Wenas tardes {params.nombre}</h1></div>
    )
}

export default Home