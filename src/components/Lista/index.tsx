import { FaRegUser, FaBook, FaLink } from "react-icons/fa";
import "../Lista/style.css";

interface BooksProps {
  book : {
      objectID: string,
      author: string,
      title: string,
      url: string
  }
}

export function Lista(props: BooksProps) {
    return(
      <li>
          <label>
            <FaRegUser/>
            <strong>{props.book.author}</strong>
          </label>
          <label>
              <FaBook/>
              <p>{props.book.title}</p>
          </label>
          <label>
            <FaLink/>
            <a href={props.book.url}> Acessar conteúdo </a>     
          </label>       
      </li>
  );
}
