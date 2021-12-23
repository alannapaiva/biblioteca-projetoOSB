import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { Lista } from "../Lista";
import "./style.css";

export function Livros() {
  return (
    <div className="App">
    	<header className="App-header">
			<h1>Biblioteca</h1>
			<input type="text" id="livro" name="livro" placeholder="Insira titulo ou autor" />
			<button><AiOutlineSearch size={45}/> </button>
			<Lista/>
      	</header>
    </div>
	
  );
}

