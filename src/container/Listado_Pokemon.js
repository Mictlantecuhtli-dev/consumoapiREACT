import React, {useEffect, useState} from 'react'
import Pokemones_html from './Pokemones';
import Pagination from './Pagination';

const Listado_Pokemon = () => {
    
  const [pokemones, setpokemones] = useState([]);
  const [info, setinfo] = useState({})

  const initUrl = "https://pokeapi.co/api/v2/pokemon/";
  const get_pokemones = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setpokemones(data.results);
        setinfo({"next": data.next,"previous": data.previous});
      })
    .catch(error => console.log(error))
  };

  const onPrevious = () => {
    get_pokemones(info.previous);
  }

  const onNext = () => {
    get_pokemones(info.next);
  }

  useEffect(() => {
    get_pokemones(initUrl);
  }, [])
  
  return(
    <div className='container'>
      <Pagination prev={info.previous} next={info.next} onAnterior={onPrevious} onSiguiente={onNext}/>
      <Pokemones_html datos={pokemones} />
      <Pagination prev={info.previous} next={info.next} onAnterior={onPrevious} onSiguiente={onNext}/>
    </div>
  )
  
}

export default Listado_Pokemon;