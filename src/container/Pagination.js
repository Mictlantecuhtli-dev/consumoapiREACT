import React from 'react'

const Pagination = ({prev, next, onAnterior, onSiguiente}) => {
  
  const Anterior = () =>{
    onAnterior();
  }

  const Siguiente = () =>{
    onSiguiente();
  }

  return (
    <nav className='mt-3'>
      <ul className="pagination justify-content-center">
        {prev ? 
          <li className="page-item">
            <a className="page-link" onClick={Anterior}>
              Anterior
            </a>
          </li>
        : null}
        {next ?
          <li className="page-item">
            <a className="page-link" onClick={Siguiente}>
              Siguiente
            </a>
          </li>
        : null}
      </ul>
    </nav>
  )
}

export default Pagination