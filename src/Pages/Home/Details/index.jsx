import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";

import styles from "./Styles.module.css"



function Details() {


    const timeStamp = '1673185089';
    const apiKey = '3edf2abbda9a7d9af0c2dda2daa1a0a0';
    const md5 = 'a41c6af456049816c1bcb7548cf0b3c4';


    const { id } = useParams();

    const [comics, setComics] = useState({})

    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/comics/${id}?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.data.results[0].thumbnail)
                const { title, description, thumbnail, path, extension, modified, results } = data
                const comics = {
                    id,
                    title: data.data.results[0].title,
                    sinopse: data.data.results[0].description,
                    image: `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension
                        }`,
                    releaseDate: data.data.results[0].modified
                }
                setComics(comics)

            })
    }, [id])

    return (

        <div >

            <Header />

            <div className={styles.container}>
                <div className={styles.comics}>
                    <img className={styles.imgcomic} src={comics.image} alt={comics.sinopse} />
                    <div className={styles.details}>
                        <h1>{comics.title}</h1>
                        <span className={styles.sinopse}>Sinopse:{comics.sinopse}</span>
                        <span className={styles.release}>Release date: {comics.releaseDate}</span>
                        <Link to="/"><button className={styles.buttonGoBack} >Go back</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details;