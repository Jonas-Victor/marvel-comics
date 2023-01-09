import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MarvelLogo from "../img/MarvelLogo.png";
import styles from "./Header.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

function Header() {

    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault()

        if (!search) return
        navigate(`/search?q=${search}`);
        setSearch("");
    }


    return (
        <div className={styles.container}>
            <div className={styles.Header}>
                <Link to="/"> <img src={MarvelLogo} alt="Logo da marvel" />  </Link>
                <div className={styles.SearchBox}>
                    <form onSubmit={handlesubmit}>
                        <input className={styles.SearchText}
                            type="text"
                            placeholder="Pesquise aqui"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <button type="submit"><i><BiSearchAlt2 /></i> </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;