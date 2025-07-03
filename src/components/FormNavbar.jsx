import React, { useState } from 'react'
import { searchUser } from '../api/follower';

const FormNavbar = () => {

    //estadoInput 
  const [inputSearch, setImputSearch] = useState('');

  const handleChange = (e) =>{
    setImputSearch(e.target.value);
  }

  const handletSubmit = async (e) =>{
    e.preventDefault();
    if(inputSearch.trim() === ''){
      alert("Debe completar el campo");
      return;
    }
    
    //Verificar si existe el usuario
    try {
      const res = await searchUser(inputSearch);
      if (res.status === 'success'){
        //Si el usuario existe lo redireccionamos a profile
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
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