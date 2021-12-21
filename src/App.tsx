import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import './App.css';

function App() {
  return (
    <div className="App">
    	<header className="App-header">
			<h1>Biblioteca</h1>
			<input type="text"></input>
      	</header>
		  <button><AiOutlineSearch size={45}/> </button>
    </div>
  );
}

export default App;
