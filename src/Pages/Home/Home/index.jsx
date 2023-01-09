import Comics from "../../../components/Comics";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";

import styles from "./styles.module.css";

function Home() {
   return (
      <div className={styles.wrapper} >
         <Header />

         <Navbar />

         <Comics />


      </div>
   )
}
export default Home;