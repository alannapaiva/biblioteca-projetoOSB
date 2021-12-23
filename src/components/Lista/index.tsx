import { FaRegUser, FaBook, FaLink } from "react-icons/fa";
import React, { Component } from 'react';
import "../Lista/style.css";


export function Lista() {
    return(
      <li>
          <label>
            <FaRegUser/>
          </label>
          <label>
              <FaBook/>
          </label>
          <label>
            <FaLink/>
          <a>
           Acessar conteúdo
          </a>     
          </label>       
      </li>
	
	 
  );
}
