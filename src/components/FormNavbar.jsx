import React, { useState } from 'react'

const FormNavbar = () => {

    //estadoInput 
  const [inputSearch, setImputSearch] = useState('');

  const handleChange = (e) =>{
    setImputSearch(e.target.value);
  }

  const handletSubmit = (e) =>{
    e.preventDefault();
    console.log(inputSearch);
  }
  return (
    <form onSubmit={handletSubmit} class="d-flex">
        <input 
        class="form-control me-sm-2" 
        type="search" 
        placeholder="Buscar usuario..."
        value={inputSearch}
        onChange={handleChange}
        />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  )
}

export default FormNavbar