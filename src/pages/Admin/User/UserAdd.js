import React from 'react';
import './userAdd.css'
const UserAdd = () => {
  return (
    <div className='user_add'>
      <h1 className='user_add'>Formulaire d'ajout d'utilisateur</h1>
      <form>
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" id="username" />
        <br />
        <label for="email">Email :</label>
        <input type="email" id="email" />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default UserAdd;
