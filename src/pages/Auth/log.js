import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import React from 'react';

const log = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const HandlePassword = (e)=>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    const HandleEmail = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)

    }


    const HandleSubmit = ()=>{

            try {

                const enteredEmail = 
                const enteredPassword
                
            } catch (error) {
                
            }



    }



    return (
        <div>
            
        </div>
    );
};

export default log;