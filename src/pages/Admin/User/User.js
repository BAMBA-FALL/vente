import React, {useEffect } from 'react';
import './user.css'
import { userService } from '../../../_services/user.service';
const User = () => {



       useEffect(()=>{
       userService.getAllUsers()
      .then(res => console.log(res.data))
      .catch(error => console.log(error))

    },[])

  
  return (
    <div className='user'>
    <button>User 4</button>
    </div>
  );
};

export default User;
