import React, {useEffect, useState} from 'react'


const Pokemones_html = ({datos = []}) => {

    const [datosP, setdatosP] = useState([])

    const getData = ( nombre ) => {
        fetch("https://pokeapi.co/api/v2/pokemon/"+nombre)
        .then(response => response.json())
        .then(data => {
            setdatosP(data);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='row mt-3'>
            {datos.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://vader.news/__export/1588965166057/sites/gadgets/img/2020/05/08/2-25193_pokemon-ball-transparent-background-transparent-background-pokeball-png.png_715985292.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Some quick example</p>
                            <a href={item.url} className="btn btn-primary">Detalles</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Pokemones_html;