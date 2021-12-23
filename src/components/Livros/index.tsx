import React, { useState } from "react";
import api from "../services/api";

import { Lista } from "../Lista";
import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";

interface Books {
	ID: string,
	author: string,
	title: string,
	url: string
}

export function Livros() {

	const [books, setBooks] = useState<Books[]>([]);
  const [input, setInput] = useState('');
  const[showMessage, setShowMessage] = useState(false);


    const handleSearch = () => {
        let value = input.toLowerCase();

        if(!value){
            api.get('/search')
            .then(response => { 
                setBooks(response.data.hits)
            })
            .catch((err) => {
                console.error("Erro!! Tente novamente!" + err);
              });              
        }

        api.get(`search?query=${value}&tags=(story,author)`)
        .then(response => { 
            setBooks(response.data.hits)
            setShowMessage(!(response.data.hits.length > 0))
        })
        .catch((err) => {
            console.error("Erro!! Tente novamente!" + err);
          });
        console.log(input);

    }


  return (
	<div className="App">
		<header className="App-header">
			<h1>Biblioteca</h1>
			<div>
				<input
				id="text" 
				placeholder="Insira titulo ou autor"  
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>  setInput(event.target.value)}
				/>
				<button className="button" type="submit" onClick={handleSearch} > <AiOutlineSearch size={45}/> </button>
			</div>
		</header>	

		<ul>{books.map((book) => {
			return <Lista key={book.ID} book={book}/>
		})}
		</ul>

		{!!showMessage  && <p>O livro que solicitou não está disponível!</p>}
    </div>
  );
}

