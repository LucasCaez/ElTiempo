import React from 'react'

export const Buscador = ({sumit}) => {
  return (
    <div className='buscador'>

    <form action="" onSubmit={sumit}>
        <input type="text" placeholder='Ciudad' />
        <button>Buscar</button>
    </form>
    
    </ div>
  )
}
