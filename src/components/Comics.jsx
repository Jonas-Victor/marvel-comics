import styles from "./Comics.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const timeStamp = '1673185089';
const apiKey = '3edf2abbda9a7d9af0c2dda2daa1a0a0';
const md5 = 'a41c6af456049816c1bcb7548cf0b3c4';




function Comics() {

  const [comics, setComics] = useState([])

  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`)
      .then(response => response.json())
      .then(data => setComics(data.data.results))
  }, []);




  return (

    <div>
      <h1 className={styles.titlo}>Comics</h1>
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
export default Comics