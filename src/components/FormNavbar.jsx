import React from 'react'

const FormNavbar = () => {
  return (
    <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Buscar usuario..."/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  )
}

export default FormNavbar