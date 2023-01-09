import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Comics from "../../../components/Comics";


import styles from "./search.module.css"

const timeStamp = '1673185089';
const apiKey = '3edf2abbda9a7d9af0c2dda2daa1a0a0';
const md5 = 'a41c6af456049816c1bcb7548cf0b3c4';
const apiKeyprin = `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=30`


function Search() {

  const [searchParams] = useSearchParams();

  const [comics, setComics] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&title=${query}`)
      .then(response => response.json())
      .then(data => setComics(data.data.results))
  }, [query]);

  return (

    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <h1 className={styles.title}>Resultados para: <span className={styles.querytext}>{query}</span></h1>


      <div className={styles.movieCard}>
        <ul className={styles.ulindex}>
          {comics.map(comic => {
            return (
              <li key={comic.id}>
                <Link to={`/details/${comic.id}`}> <img className={styles.imgcomics} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} /> </Link>
                <span>{comic.title}</span>
              </li>
            )
          })}
        </ul>
      </div>





    </div>

  )
}

export default Search;