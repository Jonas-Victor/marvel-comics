import MarvelFundo from "../img/MarvelFundo.jpg"
import styles from "./Navbar.module.css"

function Navbar() {
   return (


      <div className={styles.Navbar}>
         <ul className={styles.ulnavebar}>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Map</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Movies</a></li>
         </ul>

         <div className={styles.imgfundo}>
            <img src={MarvelFundo} alt="Logo da marvel" />
         </div>

      </div>
   )
}

export default Navbar;